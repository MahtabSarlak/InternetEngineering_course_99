/* eslint-disable indent */
const express = require('express');
const path = require('path');
const logger = require('./src/util/logger');
const route = require('./src/route/route'); // Import routes

const app = express();
const { port } = require('./src/config/config');

app.use('/', route);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.set('view engine', 'ejs');
// setup public folder
app.use(express.static('./public'));

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