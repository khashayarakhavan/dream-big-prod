// production keys 

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendInBlueKey: process.env.SEND_IN_BLUE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  sendMailGunKey: process.env.SEND_MAIL_GUN_KEY,
  sendMailGunDomain: process.env.SEND_MAIL_GUN_DOMAIN
};
