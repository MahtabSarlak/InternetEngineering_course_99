const formModel = require("../model/formModel");
const filledFormModel = require("../model/filledFormModel");
const logger = require("../util/logger");
const { isRequestValid } = require("../auth/auth-handler");
const getAllEmptyForms = (_, context) => {
  if (!isRequestValid(context, "field")) return;
  logger.logger.info({
    message: "GET all  forms",
  });
  return formModel
    .find()
    .then((forms) => {
      return forms.map((form) => {
        return { ...form._doc };
      });
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while getting all forms from database",
      });
      throw err;
    });
};

const createForm = (args, context) => {
  if (!isRequestValid(context, "admin")) return;
  const form = new formModel({
    title: args.form.title,
    fields: args.form.fields,
  });
  return form
    .save()
    .then(() => {
      logger.logger.info({
        message: "CREATE new form",
      });
      return form;
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while adding form to database",
      });
      throw err;
    });
};

const getFormById = (args, context) => {
  if (!isRequestValid(context, "field")) return;
  return formModel
    .findById(args.id)
    .then((form) => {
      if (!form) {
        logger.logger.error({
          message: "No form with given id find",
        });
        throw new Error("No form with given id");
      }
      logger.logger.info({
        message: "GET form with given id",
      });
      return { ...form._doc };
    })
    .catch((err) => {
      console.log(err);
      logger.logger.error({
        message: "Error occure while getting form with given id from database",
      });
      throw err;
    });
};

const getAllFilledForms = (_, context) => {
  if (!isRequestValid(context, "controll")) return;

  logger.logger.info({
    message: "GET all filled forms",
  });
  return filledFormModel
    .find()
    .then((filledForms) => {
      return filledForms.map((filledForm) => {
        return { ...filledForm._doc };
      });
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while getting all filled forms from database",
      });
      throw err;
    });
};

const createFilledForm = (args, context) => {
  if (!isRequestValid(context, "field")) return;
  const { token } = context();
  const filledForm = new filledFormModel({
    title: args.filledForm.title,
    formId: args.filledForm.formId,
    fields: args.filledForm.fields,
  });
  return filledForm
    .save()
    .then(() => {
      logger.logger.info({
        message: "CREATE new filled form",
      });
      return filledForm;
    })
    .catch((err) => {
      logger.logger.error({
        message: "Error occure while adding filled form to database",
      });
      throw err;
    });
};

const getFilledFormById = (args, context) => {
  if (!isRequestValid(context, "controll")) return;
  return filledFormModel
    .findById(args.id)
    .then((filledForm) => {
      if (!filledForm) {
        logger.logger.error({
          message: "No filled form with given id find",
        });
        throw new Error("No filled form with given id");
      }
      logger.logger.info({
        message: "GET filled form with given id",
      });
      return { ...filledForm._doc };
    })
    .catch((err) => {
      console.log(err);
      logger.logger.error({
        message:
          "Error occure while getting filled form with given id from database",
      });
      throw err;
    });
};

module.exports = {
  getAllEmptyForms: getAllEmptyForms,
  createForm: createForm,
  getFormById: getFormById,
  createFilledForm: createFilledForm,
  getFilledFormById: getFilledFormById,
  getAllFilledForms: getAllFilledForms,
};
