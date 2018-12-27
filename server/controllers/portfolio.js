const portfolio = require('../models').Portfolio;
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
        return portfolio
            .findAll({})
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    },

    /*retrieve(req, res) {
        return Order
            .findById(req.params.todoId, {
                include: [{
                    model: TodoItem,
                    as: 'todoItems',
                }],
            })
            .then((todo) => {
                if (!todo) {
                    return res.status(404).send({
                        message: 'Todo Not Found',
                    });
                }
                return res.status(200).send(todo);
            })
            .catch((error) => res.status(400).send(error));
    },*/

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
