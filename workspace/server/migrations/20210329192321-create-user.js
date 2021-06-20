'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true
            },
            nom: {
                type: Sequelize.STRING,
                allowNull: true
            },
            prenom: {
                type: Sequelize.STRING,
                allowNull: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: true
            },
            username: {
                type: Sequelize.STRING,
                allowNull: true
            },
            phone: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true
            },
            role: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            adresse: {
                type: Sequelize.STRING,
                allowNull: true
            },
            cp: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            ville: {
                type: Sequelize.STRING,
                allowNull: true
            },
            pays: {
                type: Sequelize.STRING,
                allowNull: true
            },
            actif: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: new Date()
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};