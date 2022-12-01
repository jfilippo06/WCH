"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          nombre: "Jose",
          cedula: 27307757,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "John Doe",
          cedula: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};
