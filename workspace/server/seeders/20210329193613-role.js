'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles', [{
                id:1,
                nom: 'superAdmin',
                description: 'superAdmin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:2,
                nom: 'client',
                description: 'client',

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles', [{
                id:1,
                nom: 'superAdmin',
                description: 'superAdmin',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:2,
                nom: 'client',
                description: 'client',

                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    }
};