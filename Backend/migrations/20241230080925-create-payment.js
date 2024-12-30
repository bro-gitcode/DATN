'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paymentID: {
        type: Sequelize.INTEGER
      },
      orderID: {
        type: Sequelize.INTEGER
      },
      transactionID: {
        type: Sequelize.INTEGER
      },
      paymentStatus: {
        type: Sequelize.STRING
      },
      paymentMethod: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      provider: {
        type: Sequelize.STRING
      },
      VNPayTransactionID: {
        type: Sequelize.INTEGER
      },
      VNPayResponseCode: {
        type: Sequelize.STRING
      },
      VNPayPaymentTime: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('payments');
  }
};