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
        isAdmin: {
            type: Sequelize.BOOLEAN,
        },
        password: {
            type: Sequelize.STRING
        },
        salt: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.ARRAY(Sequelize.STRING) // QTN: make enum or diff model?
        },
        googleId: {
            type: Sequelize.STRING
        },
        twitterId: {
            type: Sequelize.STRING
        },
        facebookId: {
            type: Sequelize.STRING
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
