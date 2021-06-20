'use strict';
module.exports = (sequelize, DataTypes) => {
    const favoris = sequelize.define('favoris', {
        user_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        note:DataTypes.STRING,
    }, {});
    favoris.associate = function(models) {
        // associations can be defined here
    };
    return favoris;
};