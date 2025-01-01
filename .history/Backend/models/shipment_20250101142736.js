'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shipment.belongsTo(models.order, { foreignKey: 'orderID' });
    }
  }
  shipment.init({
    shipmentID: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER,
    trackingCode: DataTypes.STRING,
    carrier: DataTypes.STRING,
    shipmentCost: DataTypes.DECIMAL,
    shipmentStatus: DataTypes.STRING,
    estimatedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'shipment',
  });
  return shipment;
};