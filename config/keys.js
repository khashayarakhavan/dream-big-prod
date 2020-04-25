// Keys. js

// mongodb + srv://aftoflBIG5:prod@123@cluster0-fgvr1.mongodb.net/Users?retryWrites=true&w=majority

if (process.env.NODE_ENV === 'production') {
    // we are in production mode live on the internet 
    module.exports = require('./Prod');
} else {
    // we are in development mode 
    module.exports = require('./Dev');
}