'use strict';
module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define('roles', {
        nom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {});
    role.associate = function(models) {
        // associations can be defined here
    };
    return role;
};