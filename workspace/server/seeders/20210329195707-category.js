'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [{
                id: 1,
                nom: 'miel',
                description: 'miel',
                image: 'mielCat.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nom: 'aloe vera',
                description: 'plante',
                image: 'aleocatg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                nom: 'vins',
                description: 'vin',
                image: 'vincatg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 4,
                nom: 'epices',
                description: 'epices',
                image: 'epiceCateg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 5,
                nom: 'dattes',
                description: 'dattes',
                image: 'datecateg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },


            {
                id: 6,
                nom: 'huile dolive',
                description: 'huile dolive',
                image: 'huileCatg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },


        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [{
                id: 1,
                nom: 'fruit',
                description: 'fruit fruit fruit fruit',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nom: 'légumes',
                description: 'légumes légumes légumes légumes',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    }
};