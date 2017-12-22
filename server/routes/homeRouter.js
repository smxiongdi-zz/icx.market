var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {

    user_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    req.session.user_ip = user_ip;

    res.sendFile('/home/zach/icx.market/server/views/hp.html');

}));

module.exports = router;
