const ordersController = require('../controllers').orders;
const orderItemsController = require('../controllers').orderItems;
require('dotenv').config();

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: process.env.ROOT_USER + '- test',
  }));

  app.post('/api/orders', ordersController.create);
  app.get('/api/orders', ordersController.list);
  app.get('/api/order/:id', ordersController.retrieve);
  app.put('/api/order/:id', ordersController.update);
  app.delete('/api/order/:id', ordersController.destroy);

  /*app.post('/api/todos/:todoId/items', orderItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', orderItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', orderItemsController.destroy
  );
  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));*/
};
