const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const app = express();

require('./models/User');
require('./models/Survey');
require('./services/passport');

//Database connect -->
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {console.log("connected to ATLAS")});
// <-- Database connect

// data parsing -->
app.use(bodyParser.json());
// <-- data parsing

//Cookie session -->
app.use(
    cookieSession({
        maxAge: 60 * 60 * 24 * 1000,
        keys: [keys.cookieKey]
    })
    );
app.use(passport.initialize());
app.use(passport.session());
// <-- cookie session

//Routing -->
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
// <-- Routing 

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets and files like main.js & main.css
    app.use(express.static('client/build'));

    // Express will serve up index.html if route isn't recognized
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//setup port -->
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// <-- setup port