var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});
const Models = require('../models');

exports.getAllProduct = (req, res) => {
    pool.query("SELECT * FROM products", function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                product: rows,
                success: true,
            });
        }

    });
};

exports.newProduct = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
        nom: input.nom,
        description: input.description,
        image: input.image,
        actif: input.actif,
        category_id: input.category_id,
        cp: input.cp,
        adresse: input.adresse,
        pays: input.pays,

    };
    pool.query("INSERT INTO products set ?", data, function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM products", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'produit crée avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.updateProduct = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {

        nom: input.nom,
        description: input.description,
        image: input.image,
        actif: input.actif,
        category_id: input.category_id,
        cp: input.cp,
        adresse: input.adresse,
        pays: input.pays,

    };
    /*   pool.query("UPDATE products SET nom = '" + input.nom +
      "', description = '" + input.description +
      "', image = '" + input.image +
      "', actif = '" + input.actif +
      "', category_id = '" + input.category_id +
      "', cp = '" + input.cp +
      "', adresse = '" + input.adresse +
      "', pays = '" + input.pays +
      "' WHERE id = '"
      + input.id + "'" */

    const query = 'UPDATE `products` SET ? WHERE  id ?';
    pool.query(query, [data, input.id], function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM products", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'produit modifié avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.deleteProduct = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("DELETE FROM products WHERE id = " + input.id, function(err, rows, fields) {
        if (err) {
            console.log("Error in deleting Data : %s", err);
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM products", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'produit supprimé avec succes!',
                    result: rows,

                });
            });

        }
    });
};


exports.getProductById = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("Select * FROM products WHERE id = " + input.id, function(err, rows, fields) {
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

exports.getProductbyCategory = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
        where: { category_id: input.id, },

        include: [{
                model: Models.categories,
                as: 'categories'
            },



        ]
    };
    Models.products.findAll(data).then(result => {
        res.json({
            success: true,
            result: result
        });
    }).catch(function(e) {
        //gestion erreur
        console.log(e);
    });
};