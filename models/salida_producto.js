'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Salida_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salida_producto.belongsTo(models.Cliente)
      Salida_producto.belongsTo(models.Producto)
      Salida_producto.belongsTo(models.Order)
    }
  }
  Salida_producto.init({
    producto: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Salida_producto',
  });
  return Salida_producto;
};