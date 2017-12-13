var path = require('path');

var bodyParser = require('body-parser');
var session = require('express-session');
var express = require('express');
var app = express();

var homeRouter = require('./routes/homeRouter.js');

app.use(express.static('/home/zach/nem.direct/client/'));

app.use('*', homeRouter);

app.listen(9876, () => {
	console.log('Listening on 9876', "45.76.202.20");
});
