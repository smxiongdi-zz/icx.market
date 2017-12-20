// the /register/confirm router
var express = require("express");
var router = express.Router();

router.post("/confirm", ((req, res) => {
    var db = require("/home/zach/icx.market/server/db/accounts_connec.js");
    var User = require("/home/zach/icx.market/server/models/user.js");
    var tempUser = require("/home/zach/icx.market/server/models/temp_user.js");

    var myUser = new User({});

    var found = tempUser.find({conf_link: req.body.confUrl}).limit(1);

    found.then((x, err) => {

        myUser.uname = x[0].uname; myUser.upass = x[0].upass;
        myUser.save();

        tempUser.findByIdAndRemove(x[0]._id, ((err, y) => {
            res.send({error: 0, message: "Account verified"});
        }));

    });

}));

module.exports = router;
