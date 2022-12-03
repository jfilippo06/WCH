"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Orders",
      [
        {
          numero: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numero: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numero: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numero: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          numero: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
