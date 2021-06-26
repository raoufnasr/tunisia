const passport = require('passport');
var fs = require('fs');
var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

const Models = require('../models');


/* login with passport js */
exports.loginUser = (req, res, next) => {
    passport.authenticate('user-local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.json({
                success: false,
                message: 'email/password incorrecte'
            });
        }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            const token = jwt.sign({ id: user.id, role: 'user' }, config.tokenSecretKey);
            req.flash('success', { msg: 'succès vous êtes connecté' });
            res.json({ success: true, message: 'succès vous êtes connecté', token: token, user: user });

        });
    })(req, res, next);
};

exports.getAllUsers = (req, res) => {
    pool.query("SELECT * FROM users", function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                user: rows,
                success: true,
            });
        }

    });
};

exports.deleteUser = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("DELETE FROM users WHERE id = " + input.id, function(err, rows, fields) {
        if (err) {
            console.log("Error in deleting Data : %s", err);
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM users", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'utilisateur supprimé avec succes!',
                    result: rows,

                });
            });

        }
    });
};


exports.getUserById = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("Select * FROM users WHERE id = " + input.id, function(err, rows, fields) {
        if (err) {
            console.log("Error in deleting Data : %s", err);
            res.json({
                success: false,
                message: err
            });
        } else {

            res.json({
                success: true,
                result: rows,

            });


        }
    });
};

exports.newUtilisateur = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    pool.query("SELECT * FROM users", function(err, rows) {
        if (err) console.log("Error get list : %s", err);
        /*   var id = (rows.length > 0) ? rows[rows.length - 1].id : rows.length; */
        if (input.avatar) {
            let avatar = input.avatar;

            fs.writeFile('./uploads/' + avatar, function(err, file) {
                console.log('File created');
            });
        }

        var data = {
            email: input.email,
            prenom: input.prenom,
            nom: input.nom,
            password: input.password,
            username: input.username,
            avatar: input.nom ? avatarName : '',
            role: input.role,
            adresse: input.adresse,
            cp: input.cp,
            pays: input.pays,
            ville: input.ville,

        };
        pool.query("INSERT INTO users set ?", data, function(err, rows, fields) {
            if (err) {
                console.log("Error in Inserting Data : %s", err);
                res.json({
                    success: false,
                    message: err
                });
            } else {
                pool.query("SELECT * FROM users", function(err, rows) {
                    if (err) console.log("Error Editing list : %s", err);
                    res.json({
                        utilisateurs: rows,
                        success: true,
                        message: 'utilisateur crée avec succes!'
                    });
                });
            }
        });
    });
};

exports.UpdateProfile = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    if (req.tokend_decoded.id) {
        input.id = req.tokend_decoded.id;


        pool.query("UPDATE users SET prenom = '" + input.prenom +
            "', nom = '" + input.nom +
            "', email = '" + input.email +
            "',password = '" + input.password +
            "' ,username = '" + input.username +
            "' ,adresse = '" + input.adresse +
            "' ,phone = '" + input.phone +
            "' ,cp = '" + input.cp +
            "' ,ville = '" + input.ville +
            "' ,pays = '" + input.pays +
            "',avatar = '" + input.avatar +
            "' WHERE id = '" + input.id + "'",
            function(err, rows, fields) {
                if (err) {
                    console.log("Error in updating Data : %s", err);
                    res.json({
                        'success': false,
                        'message': err
                    });
                } else {
                    pool.query("SELECT * FROM users", function(err, rows) {
                        if (err) console.log("Error Editing list : %s", err);
                        res.json({
                            users: rows,
                            success: true,
                            message: 'user modifie avec succes!'
                        });
                    });

                }
            });
    };
}

exports.getUserByToken = function(req, res) {
    let token = req.body.token;
    if (token) {
        jwt.verify(token, config.tokenSecretKey,
            function(error, decoded) {
                if (error === null && decoded) {
                    //check content of decoded token
                    var options = {
                        where: {
                            id: decoded.id,

                        }

                    };
                    var resultFn = function(result) {
                        if (result) {
                            return res.json({
                                success: true,
                                client: result
                            });
                        } else {
                            res.status(400).json({
                                success: false,
                                message: 'client non trouvé'
                            })
                        }
                    };

                    Models.users.findAll(options).then(resultFn).catch(e => { console.log(e); });


                }
                console.log(error)
            }
        );
    } else {
        return res.status(400).JSON({
            success: false,
            message: "No token provided"
        })
    }
}

exports.uploadImage = (req, res) => {
    console.log(req.files);

    try {
        return res.status(201).json({
            message: 'File uploded successfully'
        });
    } catch (error) {
        console.error(error);
    }
};