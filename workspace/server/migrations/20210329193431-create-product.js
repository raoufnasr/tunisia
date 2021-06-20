'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nom: {
                type: Sequelize.STRING,
                allowNull: true
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true
            },
            image: {
                type: Sequelize.STRING,
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
            pays: {
                type: Sequelize.STRING,
                allowNull: true
            },
            actif: {
                type: Sequelize.BOOLEAN,
                allowNull: true
            },
            category_id: {
                type: Sequelize.INTEGER,
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
        return queryInterface.dropTable('products');
    }
};