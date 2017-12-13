var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    uname: String,
    name: String,
    lang_pref: String,
    loc: String,
    about_me: String,
    last_online: Date,
});

module.exports = mongoose.model('Profile', profileSchema, 'profiles');
