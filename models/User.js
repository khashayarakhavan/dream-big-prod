const mongoose = require('mongoose');
const {Schema}= mongoose;

const userSchema = new Schema({
    googleID: String,
    name: String,
    thumbnail: String,
    credits: {type: Number, default: 0}
});

mongoose.model('users', userSchema);