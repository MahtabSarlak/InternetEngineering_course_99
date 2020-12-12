const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');
const { userValidationRules, validate, polygonValidate } = require('../util/validator');


/* GET users listing. */
router.get('/testpoint', userValidationRules(), validate, controller.testpoint);
/* PUT users listing. */
router.put('/addpolygon', polygonValidate, controller.addpolygon);

module.exports = router;
