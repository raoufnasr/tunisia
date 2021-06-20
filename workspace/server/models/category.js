'use strict';
module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('categories', {
        nom: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    category.associate = function(models) {
        // associations can be defined here
    };
    return category;
};