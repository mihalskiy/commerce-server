module.exports = (sequelize, DataTypes) => {
  const price = sequelize.define('Price', {
    name: DataTypes.STRING,
    currency: DataTypes.STRING,
    price: DataTypes.INTEGER,
    title: DataTypes.STRING,
    type:  DataTypes.STRING,
  }, {});
  price.associate = function(models) {
    price.hasMany(models.priceItem, {
      foreignKey: 'priceId',
      as: 'priceItem',
    });
  };
  return price;
};
