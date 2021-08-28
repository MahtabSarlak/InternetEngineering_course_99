const mongoose = require("mongoose");

const { Schema } = mongoose;

const filledFormSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  formId: {
    type: String,
    required: true,
  },
  fields: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    required: false,
  },
});

module.exports = mongoose.model("FilledForm", filledFormSchema);
