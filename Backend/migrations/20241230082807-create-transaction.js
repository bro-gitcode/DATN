'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionID: {
        type: Sequelize.INTEGER
      },
      orderID: {
        type: Sequelize.INTEGER
      },
      paymentID: {
        type: Sequelize.INTEGER
      },
      transactionCode: {
        type: Sequelize.STRING
      },
      transactionStatus: {
        type: Sequelize.STRING
      },
      discountPercent: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};