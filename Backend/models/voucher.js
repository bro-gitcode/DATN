'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  voucher.init({
    voucherID: DataTypes.INTEGER,
    code: DataTypes.STRING,
    discountAmount: DataTypes.DECIMAL,
    discountPercent: DataTypes.FLOAT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    quantity: DataTypes.INTEGER,
    maxUsage: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'voucher',
  });
  return voucher;
};