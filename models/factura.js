'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Factura.belongsTo(models.Cliente)
      Factura.belongsTo(models.Producto)
      Factura.belongsTo(models.Franela)
      Factura.belongsTo(models.Documento)
    }
  }
  Factura.init({
    cantidad_producto: DataTypes.INTEGER,
    cantidad_franela: DataTypes.INTEGER,
    orden: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Factura',
    paranoid: true,
  });
  return Factura;
};