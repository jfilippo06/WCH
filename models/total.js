'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Total extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Total.belongsTo(models.Cliente)
      Total.belongsTo(models.Order)
    }
  }
  Total.init({
    neto: DataTypes.DOUBLE,
    iva_impuesto: DataTypes.DOUBLE,
    iva_valor: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Total',
  });
  return Total;
};