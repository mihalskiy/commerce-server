'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    bgColor: DataTypes.STRING,
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryList: DataTypes.TEXT
  }, {});
  Portfolio.associate = function(models) {
    // associations can be defined here
  };
  return Portfolio;
};
