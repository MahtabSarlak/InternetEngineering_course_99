const mongoose = require("mongoose");

const { Schema } = mongoose;

const geoLocationSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  properties: {
    type: {
      name: String,
      required: true,
    },
  },
  geometry: {
    type: {
      type: String,
      required: true,
    },
    coordinates: {
      type: Schema.Types.Mixed,
      required: true,
    },
  },
});

const areaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  geoLocation: {
    type: geoLocationSchema,
    required: true,
  },
});

module.exports = mongoose.model("Area", areaSchema);
