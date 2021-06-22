'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories', [{
                id: 1,
                nom: 'miel',
                description: 'Le miel est une substance sucrée élaborée par les abeilles à miel à partir de nectar ou de miellat. Elles l`entreposent dans la ruche et s `èen nourrissent tout au long de l` année, en particulier lors de périodes climatiques défavorables ',
                image: 'mielCat.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nom: 'aloe vera',
                description: 'L’Aloès est une plante de la famille des Liliacées (comme la jacinthe, le lys, la tulipe, l’asperge, l’ail, l’oignon, etc.) appartenant à l’espèce des plantes grasses ou succulentes, dont fait également partie les Cactées.',
                image: 'aleocatg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                nom: 'vins',
                description: 'Le vin est une boisson alcoolisée obtenue par la fermentation du raisin, fruit de la vigne viticole. La transformation du raisin en vin est appelée la vinification.',
                image: 'vincatg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 4,
                nom: 'epices',
                description: 'Une épice est une matière organique d`origine végétale odorante ou piquante.Elle est principalement utilisée en petite quantité en cuisine. ',
                image: 'epiceCateg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 5,
                nom: 'dattes',
                description: 'La datte est le fruit comestible du dattier, un cultivar populairement pris pour un arbre. C`est un fruit charnu, oblong, de 4 à 6 cm de long, contenant un« noyau» allongé, marqué d `un sillon longitudinal. C`est un fruit très énergétique ',
                image: 'datecateg.jpg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },


            {
                id: 6,
                nom: 'huile dolive',
                description: 'L’huile d`olive est une variété d `huile alimentaire, à base de matière grasse végétale extraite des olives lors de la trituration dans un moulin à huile. Elle est un des fondements de la cuisine méditerranéenne et peut être, sous certaines conditions, bénéfique pour la santé.',
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