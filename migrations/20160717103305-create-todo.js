module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        },
        name: {
        type: Sequelize.STRING,
        allowNull: false,
        },
        telephone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Users'),
};
