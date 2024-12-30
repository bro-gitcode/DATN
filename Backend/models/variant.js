'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  variant.init({
    variantID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    stock: DataTypes.DECIMAL,
    variantStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'variant',
  });
  return variant;
};