/* eslint-disable indent */
const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('./src/util/logger');
const route = require('./src/route/route'); // Import routes

const app = express();
const { port } = require('./src/config/config');

const FORMS_PATH = path.join(__dirname, 'form-descriptors');

/* eslint no-console: ["error", { allow: ["log"] }] */
console.log('Starting back-end application...');
app.use('/static', express.static(FORMS_PATH));
app.use(cors());
app.use('/', route);
// catch 404 and log it
app.use((req, res, next) => {
  const err = new Error('The url you are trying to reach is not hosted on our server');
  err.status = 404;
  logger.logger.error({
    message: `The url you are trying to reach is not hosted on our server${req.url}`,
    status: err.status,
  });
  next(err);
});
// error handler middleware
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App listening on port ${port}!`));
process.on('SIGINT', () => {
    logger.logger.info({ message: 'Stopping the server' });
    process.exit();
});
module.exports = app;