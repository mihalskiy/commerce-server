const portfolio = require('../models').Portfolio;
const portfolioItem = require('../models').PortfolioItem;
const senderMail = require('../mail/mail.service').mail;
const sequelize = require('sequelize');
const _ = require('lodash');


module.exports = {
   /* create(req, res) {
        //senderMail(req.body.email, req.body.message);
        console.log('req', req)
        return Order
            .create({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                message: req.body.message
            })
            .then((order) => res.status(201).send(order))
            .catch((error) => res.status(400).send(error));
    },*/

    list(req, res) {
        let limit = 10;   // number of records per page
        let offset = 0;
        const {page, type} = req.query;

        portfolio.findAll({
            attributes: [
                'type',
                [sequelize.fn('COUNT', sequelize.col('type')), 'count'],
            ],
            group: 'type',
            raw: true,
            logging: true
        })
            .then((typeCount) => {
                const count =  _.filter(typeCount, o => {
                    return o.type == 'lending' || o.type == 'store' || o.type == 'business_card';

                });
                portfolio.findAndCountAll({
                    where: {
                        type: type,

                    }
                })
                .then((data) => {
                        const pages = Math.ceil(data.count / limit);
                        offset = limit * (page - 1);

                        portfolio.findAll({
                            include: [{
                                all: true,
                                nested: true,
                                model: portfolioItem
                            }],
                            where: {
                                type: type,
                            },
                            limit: limit,
                            offset: offset,
                            $sort: { id: 1 }
                        })
                        .then((portfolio) => {
                            res.status(200).json({
                                'result': portfolio,
                                'count': data.count,
                                'pages': pages,
                                'count_type': count
                            });
                        });
                    })
            })
            .catch(function (error) {
                res.status(500).send('Internal Server Error');
            });
    },
    retrieveById(req, res) {
        return portfolio
            .findById(req.params.id, {
                include: [{
                    all: true,
                    nested: true,
                    model: portfolioItem
                }]
            })
            .then((portfolio) => {
                if (!portfolio) {
                    return res.status(404).send({
                        message: 'Portfolio Not Found',
                    });
                }
                return res.status(200).send(portfolio);
            })
            .catch((error) => res.status(400).send(error));
    },

    /*update(req, res) {
        return Todo
            .findById(req.params.todoId, {
                include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],
            })
            .then(todo => {
                if (!todo) {
                    return res.status(404).send({
                        message: 'Todo Not Found',
                    });
                }
                return todo
                    .update({
                        title: req.body.title || todo.title,
                    })
                    .then(() => res.status(200).send(todo))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Todo
            .findById(req.params.todoId)
            .then(todo => {
                if (!todo) {
                    return res.status(400).send({
                        message: 'Todo Not Found',
                    });
                }
                return todo
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },*/
};


