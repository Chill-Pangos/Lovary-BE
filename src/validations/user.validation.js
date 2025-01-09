const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    dateOfBirth: Joi.string().isoDate().optional(),
    partner: Joi.object()
      .keys({
        id: Joi.string().custom(objectId).optional(),
        name: Joi.string().optional(),
        dateOfBirth: Joi.string().isoDate().optional(),
      })
      .optional(),
    startLoveDate: Joi.string().isoDate().optional(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      dateOfBirth: Joi.string().isoDate(),
      partner: Joi.object().keys({
        id: Joi.string().custom(objectId),
        name: Joi.string(),
        dateOfBirth: Joi.string().isoDate(),
      }),
      startLoveDate: Joi.string().isoDate(),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
