'use strict';
module.exports = (sequelize, DataTypes) => {
  const PortfolioItem = sequelize.define('PortfolioItem', {
    name: DataTypes.STRING,
    progress: DataTypes.INTEGER
  }, {});
  PortfolioItem.associate = function(models) {
    PortfolioItem.belongsTo(models.Portfolio, {
      foreignKey: 'portfolioId',
      onDelete: 'CASCADE',
    });
  };
  return PortfolioItem;
};
