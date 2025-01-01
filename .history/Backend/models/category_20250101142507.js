'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category.belongsToMany(models.product, {
        through: models.productCategory,
        foreignKey: 'categoryID',
      });
    }
  }
  category.init({
    categoryID: DataTypes.INTEGER,
    categoryName: DataTypes.STRING,
    categoryImage: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};