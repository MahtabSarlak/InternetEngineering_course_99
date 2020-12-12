const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 9000,
};
