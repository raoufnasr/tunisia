'use strict';
module.exports = (sequelize, DataTypes) => {
    const favoris = sequelize.define('favoris', {
        user_id: { type: DataTypes.INTEGER, },
        product_id: { type: DataTypes.INTEGER, },
        note: { type: DataTypes.STRING, },
    }, {});
    favoris.associate = function(models) {
        favoris.belongsTo(models.products, {
            foreignKey: 'product_id',
            as: 'products',
        });
    };
    return favoris;
};