const express = require('express');

const router = express.Router();
const controller = require('../controller/controller');

/* GET users listing. */
router.get('/api/forms', controller.getForms);
router.get('/api/forms/:formId(\\d+)', controller.getFormsById);
router.post('/api/forms/:formId(\\d+)', express.json(), controller.postFormsById);
router.post('/admin', express.json(),controller.postNewForm)
module.exports = router;

