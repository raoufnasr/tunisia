'use strict';
module.exports = (sequelize, DataTypes) => {
    const categorie = sequelize.define('categories', {
        nom: { type: DataTypes.STRING, },
        description: { type: DataTypes.STRING, },
        image: { type: DataTypes.STRING, },
    }, {});
    categorie.associate = function(models) {
        categorie.hasMany(models.products, {
            foreignKey: 'id',
            as: 'products',
        });
    };
    return categorie;
};