"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Factura_franelas",
      [
        {
          ClienteId: 1,
          FranelaId: 1,
          franela: "f",
          cantidad: 2,
          total: 0,
          OrderId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Factura_franelas", null, {});
  },
};
