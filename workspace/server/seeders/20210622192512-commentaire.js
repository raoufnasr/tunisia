'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('commentaires', [{
                id: 1,
                commentaire: 'xxxxxxxxxxxxxxxx rrrrrrrrrr tttttttttttttt',
                rate: 2,
                user_id: 1,
                product_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                commentaire: 'xxxxxxxxxxxxxxxx rrrrrrrrrr tttttttttttttt',
                rate: 2,
                user_id: 1,
                product_id: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};