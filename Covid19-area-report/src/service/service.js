const pointInPolygon = require('@turf/boolean-point-in-polygon').default;
const logger = require('../util/logger');
const repository = require('../repository/fileRepository');

const findPolygens = (point) => {
  const result = {
    polygons: [],
  };
  const polygons = repository.getFeatures();
  polygons.forEach((item) => {
    if (pointInPolygon(point, item)) {
      logger.logger.info({
        message: `The given point is in ${item.properties.name}`,
      });
      result.polygons.push(item.properties.name);
    }
  });
  return result;
};

const addPolygon = (polygon) => repository.addPolygon(polygon);

module.exports = {
  addPolygon,
  findPolygens,

};
