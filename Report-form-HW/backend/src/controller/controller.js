/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const logger = require('../util/logger');
const repository = require('../repository/repository')

const FORMS_PATH = path.join(__dirname, '../../form-descriptors');

exports.getForms = (req, res) => {
  logger.logger.info({
    message: 'test get forms',
  });
  const all_forms = repository.all_forms;
  const result = all_forms.map((item) => {
    try {
      return {
        form: item,
      };
    } catch (err) {
      logger.logger.error('Error while reading form files : ', err);
      return {};
    }
  });
  console.log(result)
  res.send(result);
};

exports.getFormsById = (req, res) => {
  logger.logger.info({
    message: `GET forms with id : ${req.params}`,
  });
  const { formId } = req.params;
  const result = repository.formById(formId)
  if (result == null) {
    logger.logger.error('Requested form not found : ');
    res.status(404);
  } else {
    res.status(200).json(result);
  }
};

exports.postFormsById = (req, res) => {
  console.log(req.path);
  console.log(req.params);
  logger.logger.info({
    message: `POST forms with id : ${req.params.formId}`,
  });
  res.status(200).send({ status: '200', ...req.body });
};

exports.postNewForm = (req, res) => {
  logger.logger.info({
    message: 'POST new form ',
  });
  repository.addForm(req.body);
  res.status(200).send('form added successfully');
  console.log('new form added.');
};