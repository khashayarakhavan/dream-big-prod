const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {

    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '5$ for 5shaja',
            source: req.body.id
        });
        //related to mongo User Model class from Passport.js file/ where req.user is created automatically by Passport library and binds mongoose model to all request that are authenticated successfully. 
        // we can modify the User instance directly just by accessing the req.user from any request.
        const existingUser= req.user;
        //add credits to existing user instance from Mongoose User Model.
        existingUser.credits += 5;
        const updatedUser = await existingUser.save();
        res.send(updatedUser);
        console.log('from billing: ',updatedUser);
       
        // console.log(charge);
    });
};