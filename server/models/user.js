module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
          validate: {
              isEmail: true // TODO: Write test
          }
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      isAdmin: {
          type: DataTypes.BOOLEAN,
      },
      telephone: {
          type: DataTypes.STRING,
      },
      password: {
          type: DataTypes.STRING,
      },
      tags: {
          type: DataTypes.ARRAY(DataTypes.STRING) // QTN: make enum or diff model?
      },
      salt: {
          type: DataTypes.STRING
      },
      googleId: {
          type: DataTypes.STRING
      },
      twitterId: {
          type: DataTypes.STRING
      },
      facebookId: {
          type: DataTypes.STRING
      }
  });
    User.associate = (models) => {
        User.hasMany(models.Orders, {
        foreignKey: 'orderId',
        as: 'orders',
    });
  };
  return User;
};
