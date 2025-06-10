const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    facebook: String,
    instagram:String
});

module.exports = mongoose.model('User', userSchema);
