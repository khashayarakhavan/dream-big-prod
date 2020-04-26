const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const { Hello } = require('./emailTemplates/helloTemplate');
const { rightsTemplate } = require('./emailTemplates/rightsTemplate');
const keys = require('../config/keys');

// Step1 Authentication using API-Key
const auth = {
  auth: {
    api_key: keys.sendMailGunKey,
    domain: keys.sendMailGunDomain
  }
};

// Step2 Define email options and templates
const getEmailData = (from, subject, body, template, survey) => {
  let data = null;
  switch (template) {
    case "hello": 
      data = {
        from: from,
        to: "akhavan.khashayar@gmail.com",
        cc: "akhavan.khashayar@gmail.com",
        bcc: "akhavan.khashayar@gmail.com",
        subject: subject,
        text: body,
        html: Hello(body,subject,from,survey),
        // attachments: [{ filename: "picture.JPG", path: "./picture.JPG" }],
        "o:tracking": 'True',
        "o:tracking-clicks": 'True'
      };
      // case "rights":
      // data = {
      //   from: from,
      //   to: "akhavan.khashayar@gmail.com",
      //   cc: "akhavan.khashayar@gmail.com",
      //   bcc: "akhavan.khashayar@gmail.com",
      //   subject: subject,
      //   text: body,
      //   html: rightsTemplate(),
      //   // attachments: [{ filename: "picture.JPG", path: "./picture.JPG" }],
      //   "o:tracking": 'True',
      //   "o:tracking-clicks": 'True'
      // };

      default: data;
  } 
  return data;
};

// Step3 define sendMail to send email and receive callback
const  sendMail = async (from, subject, body, template, survey, cb) => {
  
  //Step3-1 Define transporter to connect MailGun to nodeMailer with required Auth.
  const smtptransporter = nodeMailer.createTransport(mailGun(auth));

  //Step3-2 receive email data from getEmailData function.
  const mail = getEmailData(from, subject, body, template, survey);
  
  //Step3-3 Here actually connect to mailGun server and request and bulk email send.
  await smtptransporter.sendMail(mail, function (err, data) {
  if (err) {
    console.log("the error is : ",err);
    return cb(err, null);
  } else {
    console.log("Email sent via NodeMailer is:", data);
    return cb(null, data);
  }
});
};

  module.exports = sendMail;