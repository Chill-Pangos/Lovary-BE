const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createDiary = {
  body: Joi.object().keys({
    user: Joi.object()
      .keys({
        id: Joi.string().custom(objectId).required(),
        name: Joi.string().required(),
      })
      .required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

const getDiaries = {
  query: Joi.object()
    .keys({
      userId: Joi.string().custom(objectId).required(),
      partnerId: Joi.string().custom(objectId).required(),
    })
    .required(),
};

const updateDiary = {
  params: Joi.object().keys({
    diaryId: Joi.string().custom(objectId),
  }),
};

const deleteDiary = {
  params: Joi.object().keys({
    diaryId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDiary,
  getDiaries,
  updateDiary,
  deleteDiary,
};
