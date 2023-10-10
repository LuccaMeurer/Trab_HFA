'use strict';
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('user', [{
            full_name: 'Lucca Meurer',
            username: 'LuccaM',
            password: 'password',
            cpf: '03138067131',
            created_at: moment().utc().format('YYYY/MM/DD HH:mm:ss'),
            updated_at: moment().utc().format('YYYY/MM/DD HH:mm:ss')
        }, {
            full_name: 'Rafael Gomes',
            username: 'Rafinha',
            password: 'password',
            cpf: '12345678912',
            created_at: moment().utc().format('YYYY/MM/DD HH:mm:ss'),
            updated_at: moment().utc().format('YYYY/MM/DD HH:mm:ss')
        }], {});
    },

    async down(queryInterface, Sequelize) {
    }
};
