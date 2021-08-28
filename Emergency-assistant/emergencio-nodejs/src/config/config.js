const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 9000,
  mongo_user: "amirali",
  mongo_password: "DxwWrMPz97r34dx",
  mongo_db: "backenddb",
};
