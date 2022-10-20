'use strict';
const bcrypt = require('bcrypt')
const auth = require('../config/auth')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(Number.parseInt(auth.rounds))
    const admin = await bcrypt.hash(auth.admin, salt)
    const standard = await bcrypt.hash(auth.standard, salt)
     await queryInterface.bulkInsert('Users', [
      {
       userName: 'Admin',
       password: admin,
       roleId: 1,
       createdAt: new Date,
       updatedAt: new Date,
      },
      {
       userName: 'Standard',
       password: standard,
       roleId: 2,
       createdAt: new Date,
       updatedAt: new Date,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});     
  }
};
