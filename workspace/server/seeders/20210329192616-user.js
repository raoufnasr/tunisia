'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            /* start */
            {
                id: 1,
                nom: 'Raouf',
                prenom: 'nasr',
                username: 'raouf_nasr',
                email: 'raouf@gmail.com',
                password: '123456',
                role: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            /* end */
            {
                id: 2,
                nom: 'Raouf1',
                prenom: 'nasr 1',
                username: 'raouf_nasr2021',
                email: 'raouf123@gmail.com',
                password: '123456',
                role: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                nom: 'Raouf 12',
                prenom: 'nasr µ',
                username: 'raouf_nasr',
                email: 'raouf@gmail.com',
                password: '123456',
                role: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            /* ...... */
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            id:1,
            nom: 'Raouf',
            prenom: 'nasr',
            username: 'raouf_nasr',
            email: 'raouf@gmail.com',
            password: '123456',
            role: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {   id:2,
            nom: 'Raouf1',
            prenom: 'nasr 1',
            username: 'raouf_nasr2021',
            email: 'raouf123@gmail.com',
            password: '123456',
            role: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        ], {});
    }
};