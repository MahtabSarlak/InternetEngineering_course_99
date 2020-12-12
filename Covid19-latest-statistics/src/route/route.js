const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

/* GET users listing. */
router.get('/', controller.home);

module.exports = router;