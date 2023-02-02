'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura_franela extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Factura_franela.belongsTo(models.Cliente)
      Factura_franela.belongsTo(models.Franela)
      Factura_franela.belongsTo(models.Order)
    }
  }
  Factura_franela.init({
    franela: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Factura_franela',
  });
  return Factura_franela;
};