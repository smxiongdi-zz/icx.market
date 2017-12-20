const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// static directory the views read from
app.use(express.static('/home/zach/icx.market/client/'));

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
const apiRouter = require('./routes/apiRouter.js');
const homeRouter = require('./routes/homeRouter.js');
const confirmAccountRouter = require('./routes/confirmAccountRouter.js');

app.use('/api', apiRouter);
app.use('', confirmAccountRouter);
app.use('*', homeRouter);

app.listen(process.env.PORT, () => {
	console.log('Listening on ' + process.env.PORT, "45.76.202.20 " + process.env.ADMIN_PASS, process.env.NOREPLY);
});
