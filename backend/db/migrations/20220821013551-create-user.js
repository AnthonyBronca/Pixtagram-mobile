'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profilePicUrl: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      fullName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      userName: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      bio: {
        type: Sequelize.STRING(255),
      },
      verified: {
        type: Sequelize.BOOLEAN
      },
      hashedPassword: {
        type: Sequelize.STRING(255),
        allowNull: false
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
    await queryInterface.dropTable('Users');
  }
};
