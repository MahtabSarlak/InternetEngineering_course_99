const areaModel = require("../model/areaModel");
const logger = require("../util/logger");
const turf = require("@turf/helpers");
const pointInPolygon = require("@turf/boolean-point-in-polygon");
const GJV = require("geojson-validation");

const getAllAreas = (_, context) => {
  logger.logger.info({
    message: "GET all  area",
  });
  return areaModel
    .find()
    .then((areas) => {
      return areas.map((area) => {
        return { ...area._doc };
      });
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while getting all areas from database",
      });
      throw err;
    });
};
const createArea = (args, context) => {
  if (!isRequestValid(context, "admin")) return;
  const area = new areaModel({
    title: args.area.title,
    geoLocation: args.area.geoLocation,
  });
  return areaModel
    .findOne({ title: area.title })
    .then((findArea) => {
      if (findArea) {
        throw new Error("Area with given title exists");
      }
      if (
        !GJV.isFeature(area.geoLocation) ||
        !GJV.isPolygon(area.geoLocation.geometry)
      ) {
        logger.logger.error({
          message: "Invalid geoJson polygon ",
        });
        throw new Error("Invalid geoJson polygon ");
      }
      return area.save();
    })
    .then(() => {
      logger.logger.info({
        message: "CREATE new area",
      });
      return area;
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while adding area to database",
      });
      throw err;
    });
};

const getAreaById = (args, context) => {
  if (!isRequestValid(context, "controll")) return;
  return areaModel
    .findById(args.id)
    .then((area) => {
      if (!area) {
        logger.logger.error({
          message: "No area with given id find",
        });
        throw new Error("No area with given id");
      }
      logger.logger.info({
        message: "GET area with given id",
      });
      return { ...area._doc };
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while getting area with given id from database",
      });
      throw err;
    });
};

const getAreaByPoint = (args, context) => {
  if (!isRequestValid(context, "controll")) return;
  const result = [];
  const point = turf.point([args.lat, args.long]);
  return areaModel
    .find()
    .then((areas) => {
      areas.map((area) => {
        if (pointInPolygon(point, area.geoLocation)) {
          logger.logger.info({
            message: `The given point is in ${area.geoLocation.properties.name}`,
          });
          result.push(area.geoLocation.properties.name);
        }
      });
      return result;
    })
    .catch((err) => {
      logger.logger.error({
        message:
          "Error occure while getting all areas where the given point is in them from database",
      });
      throw err;
    });
};

module.exports = {
  getAreaByPoint: getAreaByPoint,
  getAllAreas: getAllAreas,
  createArea: createArea,
  getAreaById: getAreaById,
};
