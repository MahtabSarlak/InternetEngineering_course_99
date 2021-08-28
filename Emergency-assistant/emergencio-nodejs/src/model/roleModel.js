const mongoose = require("mongoose");

const { Schema } = mongoose;

const roleSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Role", roleSchema);
