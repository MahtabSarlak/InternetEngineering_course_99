const express = require('express');
const logger = require('./src/util/logger');
const route = require('./src/route/route'); // Import routes
const { port } = require('./src/config/config');

const app = express();

// const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/gis', route); // Add gis routes to middleware chain.

// catch 404 and log it
app.use((req, res, next) => {
  const err = new Error('The url you are trying to reach is not hosted on our server');
  err.status = 404;
  logger.logger.error({
    message: 'The url you are trying to reach is not hosted on our server',
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
