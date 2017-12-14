var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();

// static directory the views read from
app.use(express.static('/home/zach/nem.direct/client/'));

// bodyParser setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('trust proxy', 1);

// session setting
app.use(session({
    secret: 'xxxx',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, HttpOnly: false },
}));

// routers
var apiRouter = require('./routes/apiRouter.js');
var homeRouter = require('./routes/homeRouter.js');

app.use('/api', apiRouter);
app.use('*', homeRouter);

app.listen(process.env.PORT, () => {
	console.log('Listening on ' + process.env.PORT, "45.76.202.20");
});
