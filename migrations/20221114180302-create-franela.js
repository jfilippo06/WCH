'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Franelas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tela: {
        type: Sequelize.STRING
      },
      talla: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      cuello: {
        type: Sequelize.STRING
      },
      manga: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.DOUBLE
      },
      observasion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Franelas');
  }
};