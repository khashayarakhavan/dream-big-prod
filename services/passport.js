const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    
    existingUser = await User.findOne({googleID: profile.id})
   
        if (existingUser) {
            // we have record.
            console.log('hey bro, welcome back!')
            done(null, existingUser);
        } else {
            // we don't have record
            const newUser = await new User({ thumbnail: profile._json.picture, googleID: profile.id, name: profile.displayName }).save()
            done(null, newUser);
            }
   
    console.log('access Token:', accessToken);
    console.log('refresh Token', refreshToken);
    console.log('profile:', profile);

}
));