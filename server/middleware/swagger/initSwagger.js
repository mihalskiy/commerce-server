const swaggerDocument = require('./swagger');
const swaggerUi = require('swagger-ui-express');

function initSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

}

module.exports = initSwagger;
