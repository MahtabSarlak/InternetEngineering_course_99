const fs = require("fs");
const logger = require("../util/logger");

// read data.json
const all_forms = JSON.parse(
  fs.readFileSync("form-descriptors/form_desc.json", "utf-8")
);
console.log(all_forms)


const addForm = (item) => {
  all_forms.push(item);
  fs.writeFile("form-descriptors/form_desc.json", JSON.stringify(all_forms), (err) => {
    if (err) {
      logger.logger.error({
        message: "Error occure while adding form to database",
      });
    }
  });
  logger.logger.info({
    message: "form added successfuly",
  });
  return all_forms;
};

const formById = (formId) => {
  let result = null;
  all_forms.forEach((item) => {
    if (item.id === formId) {
      result = item;
      logger.logger.info({
        message: `form with id : ${formId} find `,
      });
    }
  });
  return result;
};

module.exports = {
  all_forms:all_forms,
  addForm,
  formById,
};
