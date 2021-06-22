var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cron = require('node-cron');
const http = require('http');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');


var mysql = require('mysql');
var { SERVER } = require('./config/variables');

var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const categoryRouter = require('./routes/categoryRouter');
const roleRouter = require('./routes/roleRouter');
const favorisRouter = require('./routes/favorisRouter');
const commentaireRouter = require('./routes/commentaireRoute');

const passportConfig = require('./config/passport');
const passport = require('passport');

var session = require('express-session');

var flash = require("connect-flash");


var app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));




app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* app.use(expressValidator()); */

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/role", roleRouter);
app.use("/api/favoris", favorisRouter);
app.use("/api/commentaire", commentaireRouter);


app.get('/api/:logo', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/uploads/" + req.params.logo)
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;