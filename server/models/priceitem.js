'use strict';
module.exports = (sequelize, DataTypes) => {
  const priceItem = sequelize.define('priceItem', {
    title: DataTypes.STRING,
    priceId: DataTypes.INTEGER
  }, {});
  priceItem.associate = function(models) {
    priceItem.belongsTo(models.Price, {
      foreignKey: 'priceId',
      onDelete: 'CASCADE',
    });
  };
  return priceItem;
};
