const eoleModel = require("../model/roleModel");
const logger = require("../util/logger");
const roleModel = require("../model/roleModel");

const getAllRoles = (_, context) => {
  logger.logger.info({
    message: "GET all  roles",
  });
  return roleModel
    .find()
    .then((roles) => {
      return roles.map((role) => {
        return { ...role._doc };
      });
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while getting all roles from database",
      });
      throw err;
    });
};
// username must be unique
const createRole = (args, context) => {
  if (!isRequestValid(context, "admin")) return;
  const role = new roleModel({
    userName: args.role.userName,
    role: args.role.role,
  });
  return roleModel
    .findOne({ userName: role.userName })
    .then((findRole) => {
      if (findRole) {
        throw new Error("Role with given username exists");
      }
      return role.save();
    })
    .then(() => {
      logger.logger.info({
        message: "CREATE new role",
      });
      return role;
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while adding role to database",
      });
      throw err;
    });
};

const getRoleById = (args, context) => {
  return roleModel
    .findById(args.id)
    .then((role) => {
      if (!role) {
        logger.logger.error({
          message: "No role with given id find",
        });
        throw new Error("No role with given id");
      }
      logger.logger.info({
        message: "GET role with given id",
      });
      return { ...role._doc };
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while getting role with given id from database",
      });
      throw err;
    });
};

const getRoleByUserName = (args, context) => {
  return roleModel
    .findOne({ userName: args.userName })
    .then((role) => {
      if (!role) {
        logger.logger.error({
          message: "No role with given username find",
        });
        throw new Error("No role with given username");
      }
      logger.logger.info({
        message: "GET role with given username",
      });
      return { ...role._doc };
    })
    .catch((err) => {
      logger.logger.error({
        message:
          "Error occure while getting role with given username from database",
      });
      throw err;
    });
};

module.exports = {
  getRoleByUserName: getRoleByUserName,
  getAllRoles: getAllRoles,
  createRole: createRole,
  getRoleById: getRoleById,
};
