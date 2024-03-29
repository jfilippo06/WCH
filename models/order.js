'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasOne(models.Documento)
      Order.hasOne(models.Factura_franela)
      Order.hasOne(models.Factura_producto)
      Order.hasOne(models.Salida_franela)
      Order.hasOne(models.Salida_producto)
      Order.hasOne(models.Total)
    }
  }
  Order.init({
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};