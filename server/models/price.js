module.exports = (sequelize, DataTypes) => {
  const price = sequelize.define('Price', {
    name: DataTypes.STRING,
    currency: DataTypes.STRING,
    price: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  price.associate = function(models) {
    // associations can be defined here
  };
  return price;
};
