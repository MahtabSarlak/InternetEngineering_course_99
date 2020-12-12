const { check, validationResult } = require('express-validator');
const GJV = require('geojson-validation');
const logger = require('./logger');
const repository = require('../repository/fileRepository');

const userValidationRules = () => [
  // lat must be a float
  check('lat').exists().withMessage('No lat value given').isFloat()
    .withMessage('Invalid lat type'),
  // long must be a float
  check('long').exists().withMessage('No long value given').isFloat()
    .withMessage('Invalid long type'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  logger.logger.error({
    message: `Invalid lat or long param for GET request :${req.url} `,
  });
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));
  const error = new Error(extractedErrors);
  error.status = 400;
  return next(error);
};
const polygonValidate = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  /*  GJV.isFeature(req.body, (valid, errs) => {
    if (!valid) {
      const error = new Error(`Invalid geoJson polygon for PUT request :${req.url} `);
      error.status = 400;
      logger.logger.error({
        message: errs,
        status: error.status,
      });
      next(error);
    } else {
      return next();
    }
  }); */
  if (!GJV.isFeature(req.body) || !GJV.isPolygon(req.body.geometry)) {
    const msg = `Invalid geoJson polygon for PUT request :${req.url} `;
    const error = new Error(msg);
    error.status = 400;
    logger.logger.error({
      message: msg,
      status: error.status,
    });
    next(error);
  } else if (repository.isDuplicatePolygon(req.body)) {
    const msg = `Polygon with name ${req.body.properties.name} already exists :${req.url} `;
    const error = new Error(msg);
    error.status = 400;
    logger.logger.error({
      message: msg,
      status: error.status,
    });
    next(error);
  }
  return next();
};

module.exports = {
  userValidationRules,
  validate,
  polygonValidate,
};
