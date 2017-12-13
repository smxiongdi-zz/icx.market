var path = require('path');

var bodyParser = require('body-parser');
var session = require('express-session');
var express = require('express');
var app = express();

// static directory the views read from
app.use(express.static('/home/zach/nem.direct/client/'));

// bodyParser setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session setting
app.use(session({
    secret: 'xxxx',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, HttpOnly: false },
}));

// routers
var homeRouter = require('./routes/homeRouter.js');

app.use('*', homeRouter);

app.listen(9876, () => {
	console.log('Listening on 9876', "45.76.202.20");
});
