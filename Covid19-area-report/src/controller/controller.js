const turf = require('@turf/helpers');
const service = require('../service/service');
const logger = require('../util/logger');


exports.testpoint = (req, res) => {
  logger.logger.info({
    message: `Valid param for GET request :${req.url} `,
  });
  const point = turf.point([req.query.lat, req.query.long]);
  const result = service.findPolygens(point);
  res.status(200).send(result);
};
exports.addpolygon = (req, res) => {
  logger.logger.info({
    message: `Valid param for PUT request :${req.url} `,
  });
  const data = service.addPolygon(req.body);
  res.status(200).send(data);
};
