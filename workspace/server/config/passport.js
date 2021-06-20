const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

var jwt = require('jsonwebtoken');
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

/**
 * Sign in using Email and Password.
 */
passport.use('user-local', new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
    // callback with email and password from our form
    pool.query("SELECT * FROM `users` WHERE `email` = '" + username + "' OR `username` = '" + username + "'", function(err, rows) {
        if (err) {
            return done(err);
        }
        if (!rows.length) {
            return done(null, false, 'No user found.'); // req.flash is the way to set flashdata using connect-flash
        }

        // if the user is found but the password is wrong
        if (!(rows[0].password == password)) {
            console.log('loginMessage', 'Oops! Wrong password.');
            return done(null, false, 'Oops! Wrong password.'); // create the loginMessage and save it to session as flashdata
        }

        // all is well, return successful user

        return done(null, rows[0]);

    });

}));

exports.verifyToken = (req, res, next) => {
    var token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['authorization'];
    console.log(req.query);
    if (token && token.length) {
        token = token.replace("Bearer ", "");
        console.log('token', config);
        console.log('token', token);
        jwt.verify(token, config.tokenSecretKey.toString('base64'),
            function(error, decoded) {
                if (error === null && decoded) {
                    req.tokend_decoded = decoded;
                    return next();
                }
                console.log(error)
            }
        );
    } else if (req.query.filter) {
        return next();
    } else {
        return res.status(400);
    }
}