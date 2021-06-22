var { SERVER } = require('../config/variables');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: SERVER.host,
    user: SERVER.user,
    password: SERVER.password,
    database: SERVER.database
});

const Models = require('../models');
exports.getAllFavoris = (req, res) => {
    pool.query("SELECT * FROM favoris", function(err, rows) {
        if (err) {
            console.log(err);
        } else {
            res.json({
                favoris: rows,
                success: true,
            });
        }

    });
};

exports.newFavoris = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
        user_id: input.user_id,
        product_id: input.product_id,
        note: input.note


    };
    pool.query("INSERT INTO favoris set ?", data, function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM favoris", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'favoris crée avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.updateFavoris = (req, res) => {

    var input = JSON.parse(JSON.stringify(req.body));

    var data = {
        user_id: input.user_id,
        product_id: input.product_id,
        note: input.note
    };


    const query = 'UPDATE favoris SET ? WHERE  id=?';
    pool.query(query, [data, input.id], function(err, rows, fields) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM favoris", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'favoris modifié avec succes!',
                    result: rows
                });
            });

        }
    });

};

exports.deleteFavoris = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    pool.query("DELETE FROM favoris WHERE id = " + input.id, function(err, rows, fields) {
        if (err) {
            console.log("Error in deleting Data : %s", err);
            res.json({
                success: false,
                message: err
            });
        } else {
            pool.query("SELECT * FROM favoris", function(err, rows) {
                if (err) console.log("Error Editing list : %s", err);
                res.json({
                    success: true,
                    message: 'favoris supprimé avec succes!',
                    result: rows,

                });
            });

        }
    });
};


exports.getFavorisById = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        user_id: input.user_id,
        product_id: input.product_id,
        note: input.note


    };
    pool.query("Select * FROM favoris WHERE id = " + input.id, function(err, rows, fields) {
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


exports.checkFavoris = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    var data = {
        user_id: input.user_id,
        product_id: input.product_id,
        note: input.note
    };

    pool.query("Select * FROM favoris WHERE user_id = " + input.user_id, "',product_id='" + input.product_id + "'", function(err, rows, fields) {
        if (err) {
            console.log("Error in deleting Data : %s", err);
            res.json({
                success: false,
                message: err
            });
        } else {

            var resultArray = Object.values(JSON.parse(JSON.stringify(rows)))

            if (rows.length > 0) {
                pool.query("DELETE FROM favoris WHERE id = " + resultArray[0].id, function(err, rows, fields) {
                    if (err) {
                        console.log("Error in deleting Data : %s", err);
                        res.json({
                            success: false,
                            message: err
                        });
                    } else {
                        pool.query("SELECT * FROM favoris", function(err, rows) {
                            if (err) console.log("Error Editing list : %s", err);
                            res.json({
                                success: true,
                                message: 'favoris supprimé avec succes!',
                                result: rows,

                            });
                        });

                    }
                });

            } else {


                pool.query("INSERT INTO favoris set ?", data, function(err, rows, fields) {
                    if (err) {
                        res.json({
                            success: false,
                            message: err
                        });
                    } else {
                        pool.query("SELECT * FROM favoris", function(err, rows) {
                            if (err) console.log("Error Editing list : %s", err);
                            res.json({
                                success: true,
                                message: 'favoris crée avec succes!',
                                result: rows
                            });
                        });

                    }
                });

            }






        }
    });









};

exports.getFavorisByUser = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    if (req.tokend_decoded.id) {
        input.id = req.tokend_decoded.id;
        var data = {
            where: { user_id: input.id, },

            include: [{
                model: Models.products,
                as: 'products'
            }, ]
        };
        Models.favoris.findAll(data).then(result => {
            res.json({
                success: true,
                result: result
            });
        }).catch(function(e) {
            //gestion erreur
            console.log(e);
        });
    };
}

exports.getIfFavoris = (req, res, next) => {
    var input = JSON.parse(JSON.stringify(req.body));
    if (req.tokend_decoded.id) {
        input.id = req.tokend_decoded.id;
        var data = {
            where: {
                user_id: input.id,
                product_id: input.product_id
            },
        };
        Models.favoris.findAll(data).then(result => {
            res.json({
                success: true,
                result: result
            });
        }).catch(function(e) {
            //gestion erreur
            console.log(e);
        });
    };
}