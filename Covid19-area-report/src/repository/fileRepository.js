const fs = require('fs');
const logger = require('../util/logger');

// init jsonData
const initData = {
  type: 'FeatureCollection',
  features: [],
};

fs.writeFileSync('public/geoData.json', JSON.stringify(initData), (err) => {
  if (err) {
    logger.logger.error({
      message: 'Error occure while initializing the database',
    });
  }
});
// read data.json
const jsonData = JSON.parse(fs.readFileSync('public/geoData.json', 'utf-8'));

const getJsonData = () => jsonData;

const getFeatures = () => jsonData.features;


const addPolygon = (item) => {
  jsonData.features.push(item);
  fs.writeFile('public/geoData.json', JSON.stringify(jsonData), (err) => {
    if (err) {
      logger.logger.error({
        message: 'Error occure while adding polygon to database',
      });
    }
  });
  logger.logger.info({
    message: 'Polygon added successfuly',
  });
  return jsonData;
};

const isDuplicatePolygon = (item) => {
  let isDup = false;
  const polygons = getFeatures();
  polygons.forEach((element) => {
    if (item.properties.name === element.properties.name) {
      isDup = true;
    }
  });
  return isDup;
};

module.exports = {
  getJsonData,
  getFeatures,
  addPolygon,
  isDuplicatePolygon,
};
