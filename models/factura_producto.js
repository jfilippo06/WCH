'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Factura_producto.belongsTo(models.Cliente)
    }
  }
  Factura_producto.init({
    orden: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Factura_producto',
  });
  return Factura_producto;
};