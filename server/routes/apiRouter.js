var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randomstring');
var nev = require('email-verification')(require('mongoose'));

const nodemailer = require('nodemailer');

// session api endpoint
router.post('/session', ((req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.send({uname: req.session.uname});
}));

// login API endpoint
router.post('/login', ((req, res) => {
    var db = require('/home/zach/nem.direct/server/db/accounts_connec.js');
    var User = require('/home/zach/nem.direct/server/models/user.js');

    var loginUser = new User({});

    var hashPass = loginUser.encryptPass(req.body.upass);
    var thisUser = User.find({uname: req.body.uname}).limit(1);
    console.log("I'm here");

    thisUser.then((x, err) => {
        x.length > 0 ? bcompare() : res.send({error: 1, message: "E-mail or password is incorrect"});
    });

    var bcompare = thisUser.then((x, err) => {
        console.log(x);
        bcrypt.compare(req.body.upass, x[0].upass, function(err, result) {
            req.session.uname = req.body.uname;
            req.session.save();
            res.send({uname: req.body.uname, error: 0, message: "Successfully logged in"});
        });
    });

}));

// logout API endpoint
router.post('/logout', ((req, res) => {
    req.session.destroy();
    res.send({response: 'Logged out'});
}));

// register API endpoint
router.post('/register', ((req, res) => {
    var db = require('/home/zach/nem.direct/server/db/accounts_connec.js');

    var User = require('/home/zach/nem.direct/server/models/user.js');
    var tempUser = require('/home/zach/nem.direct/server/models/temp_user.js');

    var myTempUser = new tempUser({});
    var alreadyRegistered = tempUser.find({uname: req.body.uname}).limit(1);
    var alreadyPermanent = User.find({uname: req.body.uname}).limit(1);

    console.log('obj: ' + JSON.stringify(req.body));
    console.log('uname: ' + req.body.uname);
    console.log('upass: ' + req.body.upass);

    alreadyRegistered.then((x, err) => {
        x.length > 0 ?
            (res.send({ error: 1, message: 'Already registered' })) :
            alreadyPermanent.then((y, err) => { y.length > 0 ? (res.send({ error: 1, message: 'This email is already in use' })) :
            registerUser() });
    });

    const registerUser = _ => {
        var hashPass = myTempUser.encryptPass(req.body.upass);
        hashPass.then((hash, err) => {
            myTempUser.uname = req.body.uname;
            myTempUser.upass = hash;
            myTempUser.conf_link = randstr.generate(10);
            myTempUser.save();
            email_verification(req.body.uname, myTempUser.conf_link);
        });
    }

    const email_verification = (ev_email, ev_link) => {
        // send email

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'support@nem.direct', // store below pass in ENV
                pass: process.env.ADMIN_PASS
            }
        });

        let mailOptions = {
            from: 'nem.direct <support@nem.direct>',
            to: ev_email,
            subject: "Account activation", // replace with IP for the time being
            text: "Hello, please confirm your email by going to the following link: http://" + process.env.CURR_HOST + "/confirm/"+ev_link,
            html: "<b>Hello, please confirm your email by going to the following link: <br/> http://" + process.env.CURR_HOST + "/confirm/"+ev_link+"</b>",

        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) { // do something else with this later, system report / log
                return console.log(error);
            }
            console.log('msg %s sent: %s', info.messageId, info.response);
            res.send({error: 0, message: "Successfully registered. Please check your e-mail for a confirmation link."});
        });
    }

}));

module.exports = router;
