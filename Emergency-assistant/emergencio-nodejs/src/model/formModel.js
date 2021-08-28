const mongoose = require("mongoose");

const { Schema } = mongoose;

const formSchema = new Schema({
  title: {
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
        required: {
          type: Boolean,
          required: true,
        },
        options: [
          {
            label: {
              type: String,
              required: true,
            },
            value: {
              type: Schema.Types.Mixed,
              required: true,
            },
          },
        ],
      },
    ],
    required: false,
  },
});

module.exports = mongoose.model("Form", formSchema);
