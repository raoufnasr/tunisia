'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('favoris', [{
            id: 1,
            user_id: 1,
            product_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            user_id: 1,
            product_id: 1,

            createdAt: new Date(),
            updatedAt: new Date(),
        },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('favoris', [{
            id:1,
            user_id: 1,
            product_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {   id:2,
            user_id: 1,
            product_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        ], {});
    }
};