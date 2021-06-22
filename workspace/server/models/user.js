'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.INTEGER,
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
        ville: {
            type: DataTypes.STRING,
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
    }, {});
    user.associate = function(models) {
        user.hasMany(models.commentaires, {
            foreignKey: 'id',
            as: 'commentaire',
        });
    };
    return user;
};