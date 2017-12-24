var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    uname: String,
    profile_name: String,
    lang_pref: String,
    location: String,
    about_me: String,
    last_online: Date,
});

module.exports = mongoose.model('Profile', profileSchema, 'profiles');
