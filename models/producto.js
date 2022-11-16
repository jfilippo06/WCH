'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producto.hasOne(models.Factura)
      Producto.hasOne(models.Producto)
    }
  }
  Producto.init({
    producto: DataTypes.STRING,
    tipo: DataTypes.STRING,
    color: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Producto',
    paranoid: true,
  });
  return Producto;
};