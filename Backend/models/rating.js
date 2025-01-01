'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rating.belongsTo(models.User, { foreignKey: 'userID' });
      rating.belongsTo(models.product, { foreignKey: 'productID' });
    }
  }
  rating.init({
    ratingID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    review: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'rating',
  });
  return rating;
};