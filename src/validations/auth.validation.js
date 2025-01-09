const Joi = require("joi");
const { objectId } = require("./custom.validation");

const register = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    dateOfBirth: Joi.string().isoDate().required(),
  }),
};

const login = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};

const logout = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
};
