/* eslint-disable arrow-parens */
/* eslint-disable no-shadow */
/* eslint-disable indent */
const fetch = require('node-fetch');
const logger = require('../util/logger');

exports.home = (req, res) => {
    logger.logger.info({
        message: 'rendering home page',
    });
    fetch('http://covid19api.xapix.io/v2/locations')
        .then(res => res.json())
        .then(json => res.status(200).render('pages/home.ejs', json));
};