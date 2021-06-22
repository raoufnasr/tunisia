const Models = require('../models');


exports.createCommentaire = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));
    if (req.tokend_decoded) {
        input.id = req.tokend_decoded.id;

    } else {
        return res.json({
            success: false,
            errors: 'action not authorized'
        });
    }

    var data = {
        user_id: input.id,
        commentaire: input.commentaire,
        product_id: input.product_id,
        rate: input.rate
    }


    Models.commentaires.create(data).then(data => {
        return res.json({
            success: true,
            message: 'commentaire crée avec succes!',
            data: data
        });
    })




}

exports.getCommentaireByProduct = (req, res) => {
    var input = JSON.parse(JSON.stringify(req.body));


    var data = {
        where: { product_id: input.product_id },
        include: [{
            model: Models.users,
            as: 'users'
        }, ]

    }



    Models.commentaires.findAll(data).then(data => {
        return res.json({
            success: true,
            message: 'get commentaire  avec succes!',
            data: data
        });
    })




}