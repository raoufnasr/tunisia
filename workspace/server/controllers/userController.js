const passport = require('passport');
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


/* login with passport js */
exports.loginUser = (req, res, next) => {
    passport.authenticate('user-local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.json({
                success: false,
                message: 'email/password not valid'
            });
        }
        if (user.actif == '0') {
            res.json({
                success: false,
                message: 'activer votre compte'
            });
            return
        }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            const token = jwt.sign({ id: user.id, role: 'agence' }, config.tokenSecretKey);
            console.log('Success! You are logged in.')
            req.flash('success', { msg: 'Success! You are logged in.' });
            res.json({ success: true, message: 'Success! You are logged in', token: token, user: user });

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
            let avatar = input.avatar.split(';base64,').pop();
            var avatarName = Date.now() + '.png'
            fs.writeFile('./uploads/' + avatarName, avatar, { encoding: 'base64' }, function(err, file) {
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