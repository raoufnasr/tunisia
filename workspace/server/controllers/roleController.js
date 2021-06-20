var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

exports.getAllRole = (req, res) => {
    pool.query("SELECT * FROM roles", function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                role: rows,
                success: true,
            });
        }

    });
};

exports.newRole = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
        nom: input.nom,
        description: input.description,
       

    };
    pool.query("INSERT INTO roles set ?", data, function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM roles", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'roles crée avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.updateRole = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
      
        nom: input.nom,
        description: input.description,
        

    };
 

    const query = 'UPDATE roles SET ? WHERE  id=?';
pool.query(query, [data, input.id], function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM roles", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'roles modifié avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.deleteRole = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("DELETE FROM roles WHERE id = " + input.id, function(err, rows, fields) {
        if (err) {
            console.log("Error in deleting Data : %s", err);
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM roles", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'role supprimé avec succes!',
                    result: rows,
                    
                });
            });

        }
    });
};


exports.getRoleById = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("Select * FROM roles WHERE id = " + input.id, function(err, rows, fields) {
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

