var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

exports.getAllCategory = (req, res) => {
    pool.query("SELECT * FROM categories", function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                category: rows,
                success: true,
            });
        }

    });
};

exports.newCategory = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
        nom: input.nom,
        description: input.description,


    };
    pool.query("INSERT INTO categories set ?", data, function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM categories", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'categorie crée avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.updateCategory = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {

        nom: input.nom,
        description: input.description,


    };


    const query = 'UPDATE categories SET ? WHERE  id=?';
    pool.query(query, [data, input.id], function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM categories", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'categorie modifié avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.deleteCategory = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("DELETE FROM categories WHERE id = " + input.id, function(err, rows, fields) {
        if (err) {
            console.log("Error in deleting Data : %s", err);
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM categories", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'categorie supprimé avec succes!',
                    result: rows,

                });
            });

        }
    });
};


exports.getCategoryById = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("Select * FROM categories WHERE id = " + input.id, function(err, rows, fields) {
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