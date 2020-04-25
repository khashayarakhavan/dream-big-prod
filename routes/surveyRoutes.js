const _ = require('lodash');
const multer = require('multer');
const { Path } = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const sendMail = require('../services/mailer');
const { log } = console;

const Survey = mongoose.model('surveys');

module.exports = (app) => {

    app.get('/api/surveys', requireLogin, async (req,res) => {
        const surveys = await Survey.find({_user: req.user.id, yes:1})
        .select({ recipients: false});

        res.send(surveys);
    });

    // Route to response to the links in email survey
    app.get('/api/surveys/feedback/:surveyID/:choice', (req,res) => {
        res.send('Thanks for voting');
    });
    
    app.post('/api/surveys/webhooks',(req, res) => {
          const request = req.body["event-data"];

          // defining the structure of our URI.
          const pathStructure = new Path("/api/surveys/feedback/:surveyID/:choice");
          // URL helper extracts url and pathname only returns route part of the url.
          const pathRoute = new URL(request.url).pathname;
          // test method compares the Route with structure, if variables {surveyID, choice}
          // are available in the route, test returns them.
          // if not, it returns undefined. 
          const match = pathStructure.test(pathRoute);
          if (match) {
            const record = {
              email: request.recipient,
              surveyID: match.surveyID,
              choice: match.choice,
            }
            // log(record);
            
          };

        //   const compactEvents = _.compact(record);
        //   const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyID');

          /* using lodash advanced chain method guide for future uses -->
          
          const events = _.chain(req.body)
          .map()
          .uniqBy()
          .sort()
          .value();
          
          <-- */
          
          // update recipient in MongoDB
          Survey.updateOne({
              _id: match.surveyID,
              recipients: {
                  $elemMatch: { email: request.recipient, responded: false}
                }
            }, {
                //increment by 1 the choice key {yes/no} on the fly using ES2016 syntax
                "$inc": { [match.choice]: 1},
                "$set": { 'recipients.$.responded': true},
                lastResponded: new Date()
            }
            ).exec();
            
            res.status(200).send('Thanks MailGun! webhook received in development env.');
        });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        
        const {surveyTitle, from, subject, body, template, recipients} = req.body;
        const survey = new Survey({
            title: surveyTitle,
            subject,
            body,
            recipients: recipients.split(',').map(email =>  ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        try {
        // send email here
        await sendMail(from, subject, body, template , survey, function cb(err, data) {
            if (err) {
                log(err);
                return res.status(500).json({ message: err.message || 'internal error' });
            } else {
                log('hey bro, sendMail Done');
                // log(data);
                // return res.status(200).json({ message: 'email sent correctly via mailGun' });
            }
        });
        // mail sent successfully 

        await survey.save();
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }

    });
};