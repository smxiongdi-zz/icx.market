// the /register/confirm router
var express = require("express");
var router = express.Router();

router.post("/confirm", ((req, res) => {
    var db = require("/home/zach/nem.direct/server/db/accounts_connec.js");
    var User = require("/home/zach/nem.direct/server/models/user.js");
    var tempUser = require("/home/zach/nem.direct/server/models/temp_user.js");

    var myUser = new User({});

    var found = tempUser.find({conf_link: req.body.confUrl}).limit(1);

    found.then((x, err) => {
        console.log("Hitting");

        myUser.uname = x[0].uname; myUser.upass = x[0].upass;
        myUser.save();

        tempUser.findByIdAndRemove(x[0]._id, ((err, y) => {
            res.send({message: "Account verified"});
        }));

    });

}));

module.exports = router;
