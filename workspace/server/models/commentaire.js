'use strict';
module.exports = (sequelize, DataTypes) => {
    const commentaire = sequelize.define('commentaires', {
        commentaire: DataTypes.STRING,
        rate: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER
    }, {});
    commentaire.associate = function(models) {
        commentaire.belongsTo(models.users, {
            foreignKey: 'user_id',
            as: 'users',
        });
    };
    return commentaire;
};