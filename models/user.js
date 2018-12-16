module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  });
    User.associate = (models) => {
        User.hasMany(models.OrderItem, {
      foreignKey: 'orderId',
      as: 'orderItems',
    });
  };
  return User;
};
