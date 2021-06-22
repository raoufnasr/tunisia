'use strict';
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('products', {
        nom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cp: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        pays: {
            type: DataTypes.STRING,
            allowNull: true
        },
        actif: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {});
    product.associate = function(models) {
        product.hasMany(models.favoris, {
            foreignKey: 'id',
            as: 'favoris',
        });
        product.belongsTo(models.categories, {
            foreignKey: 'category_id',
            as: 'categories',
        });
    };
    return product;
};