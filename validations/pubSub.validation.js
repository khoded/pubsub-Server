const Joi = require('@hapi/joi');

const subscriber = {
  params: Joi.object().keys({
    topic: Joi.string().required(),
  }),
  body: Joi.object().keys({
    url: Joi.string().required(),
  }),
};

const publisher = {
  params: Joi.object().keys({
    topic: Joi.string().required(),
  }),
  body: Joi.object().keys({
    message: Joi.string().required(),
  }),
};

module.exports = {
  subscriber,
  publisher,
};
