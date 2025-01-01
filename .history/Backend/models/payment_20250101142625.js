'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.belongsTo(models.order, { foreignKey: 'orderID' });
      payment.hasMany(models.transaction, { foreignKey: 'paymentID' });
    }
  }
  payment.init({
    paymentID: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER,
    transactionID: DataTypes.INTEGER,
    paymentStatus: DataTypes.STRING,
    paymentMethod: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    provider: DataTypes.STRING,
    VNPayTransactionID: DataTypes.INTEGER,
    VNPayResponseCode: DataTypes.STRING,
    VNPayPaymentTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};