const portfolio = require('../models').Portfolio;
const portfolioItem = require('../models').PortfolioItem;
const senderMail = require('../mail/mail.service').mail;


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
        console.log('REQ.PARAMS.ID', req.query.type);
        let limit = 10;   // number of records per page
        let offset = 0;

        portfolio.findAndCountAll({

        })
            .then((data) => {
                const {page, type} = req.query;
                const pages = Math.ceil(data.count / limit);
                offset = limit * (page ? page : 1 - 1);

                portfolio.findAll({
                    include: [{
                        all: true,
                        nested: true,
                        model: portfolioItem
                    }],
                    where: {
                        type: type || 'lending',

                    },
                    limit: limit,
                    offset: offset,
                    $sort: { id: 1 }
                })
                    .then((users) => {
                        res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
                    });
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


