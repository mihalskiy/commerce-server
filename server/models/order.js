module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
    });
  };
  return Orders;
};
