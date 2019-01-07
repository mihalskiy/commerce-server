const price = require('../models').Price;
const priceItem = require('../models').priceItem;
const sequelize = require('sequelize');
const _ = require('lodash');


module.exports = {

    list(req, res) {
        const {type} = req.query;
        price.findAll({
            include: [{
                all: true,
                nested: true,
                model: priceItem
            }],
            where: {
                type: type,
            }
        })
        .then((prices) => {
            res.status(200).json(prices);
        })
        .catch(function (error) {
            res.status(500).send('Internal Server Error');
        });
    }
};


