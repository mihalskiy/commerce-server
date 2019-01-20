const ordersController = require('../controllers').orders;
const portfolioController = require('../controllers').portfolio;
const priceController = require('../controllers').price;
require('dotenv').config();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: process.env.ROOT_USER + '- test',
  }));

  app.post('/api/orders', ordersController.create);
  app.get('/api/orders', ordersController.list);
  app.get('/api/order/:id', ordersController.retrieve);
  app.put('/api/order/:id', ordersController.update);
  app.delete('/api/order/:id', ordersController.destroy);

  app.get('/api/portfolio', portfolioController.listByType);
  app.get('/api/portfolios', portfolioController.list);
  app.get('/api/portfolio/:id', portfolioController.retrieveById);

  app.get('/api/price', priceController.list);
};
