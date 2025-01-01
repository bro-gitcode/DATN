'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    orderID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    paymentID: DataTypes.INTEGER,
    orderStatus: DataTypes.STRING,
    totalPrice: DataTypes.DECIMAL,
    shipAddress: DataTypes.TEXT,
    shipStatus: DataTypes.STRING,
    deliveryDate: DataTypes.DATE,
    totalQuantity: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};