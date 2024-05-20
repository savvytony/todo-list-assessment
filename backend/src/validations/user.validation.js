import Joi from 'joi';

export const createUser = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const getAllUser = {
  query: Joi.object().keys({}),
};

export const getUserById = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
};

export const updateUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    username: Joi.string(),
    password: Joi.string(),
  }),
};

export const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
};
