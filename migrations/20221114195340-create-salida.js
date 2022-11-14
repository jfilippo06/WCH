'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Salidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id'
        },
      },
      Id_producto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Productos',
          key: 'id'
        },
      },
      cantidad_producto: {
        type: Sequelize.INTEGER
      },
      Id_franela: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Franelas',
          key: 'id'
        },
      },
      cantidad_franela: {
        type: Sequelize.INTEGER
      },
      Id_orden: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Factura',
          key: 'orden'
        },
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
    await queryInterface.dropTable('Salidas');
  }
};