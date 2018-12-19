module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};
