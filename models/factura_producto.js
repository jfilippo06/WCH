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
      Factura_producto.belongsTo(models.Producto)
      Factura_producto.belongsTo(models.Order)
    }
  }
  Factura_producto.init({
    producto: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Factura_producto',
  });
  return Factura_producto;
};