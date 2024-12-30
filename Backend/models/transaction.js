'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction.init({
    transactionID: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER,
    paymentID: DataTypes.INTEGER,
    transactionCode: DataTypes.STRING,
    transactionStatus: DataTypes.STRING,
    discountPercent: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};