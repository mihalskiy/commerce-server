const Price = require('../models').Price;
const priceItem = require('../models').priceItem;
const sequelize = require('sequelize');
const _ = require('lodash');




module.exports = {

    list(req, res) {
        const {type} = req.query;
        return Price
            .findAll({
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
    },
    upload(req, res) {
        let uploadFile = req.files
        const fileName = req.files
        uploadFile.mv (
            `${__dirname}/../public/files/${fileName}`,
            function (err) {
                if (err) {
                    return res.status (500) .send (err)
                }

                res.json ({
                    file:`public/${req.files.file.name}`,
                })
            },
        )
    }
};


