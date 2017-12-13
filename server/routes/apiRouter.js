var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randstr');
var nev = require('email-verification')(require('mongoose'));

const nodemailer = require('nodemailer');

// login API endpoint
router.post('/login', ((req, res) => {
    var db = require('/home/zach/nem.direct/server/db/accounts_connec.js');
    var User = require('home/zach/nem.direct/server/models/user.js');

    var loginUser = new User({});

    var hashPass = loginUser.encryptPass(req.body.pass);
    var thisUser = User.find({uname: loginUser.uname}).limit(1);

    thisUser.then((x, err) => {
        x.length > 0 ? bcompare() : res.send({err: 0, redirect: '/login', message: 'no user found'}), console.log('no user');
    });

    var bcompare = thisUser.then((x, err) => {
        bcrypt.compare(req.body.pass, x[0].upass, function(err, result) {
            req.session.uname = req.body.email;
            req.session.save();
            res.send({uname: req.body.email});
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
    var alreadyRegistered = tempUser.find({uname: req.body.email}).limit(1);
    var alreadyPermanent = User.find({uname: req.body.email}).limit(1);

    alreadyRegistered.then((x, err) => {
        x.length > 0 ?
            (res.send({ errorMessage: 'Already registered' })) :
            alreadyPermanent.then((y, err) => { y.length > 0 ? (res.send({ errorMessage: 'This email is already in use' })) :
            registerUser() });
    });

    const registerUser = _ => {
        var hashPass = myTempUser.encryptPass(req.body.pass);
        hashPass.then((hash, err) => {
            myTempUser.name = req.body.email;
            myTempUser.upass = hash;
            myTempUser.conf_link = randstr.generate(10);
            myTempUser.save();
            email_verification(req.body.email, myTempUser.conf_link);
            res.send({successMessage: "Successfully registered. Please check your e-mail for a confirmation link."});
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
                pass: 'this needs to be stored in an env var'
            }
        });

        let mailOptions = {
            from: 'nem.direct <support@nem.direct>',
            to: ev_email,
            subject: "Account activation", // replace with IP for the time being
            text: "Hello, please confirm your email by going to the following link: http://nem.direct/confirm/"+ev_link,
            text: "<b>Hello, please confirm your email by going to the following link: <br/> http://nem.direct/confirm/"+ev_link+"</b>",

        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) { // do something else with this later, system report / log
                return console.log(error);
            }
            console.log('msg %s sent: %s', info.messageId, info.response);
        });
    }

}));

// session api endpoint
router.post('/session', ((req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.send({uname: req.session.uname});
}));
