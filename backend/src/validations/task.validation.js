import Joi from 'joi';

export const createTask = {
  body: Joi.object().keys({
    banner: Joi.string().uri(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

export const getAllTask = {
  query: Joi.object().keys({}),
};

export const getTaskById = {
  params: Joi.object().keys({
    taskId: Joi.string().required(),
  }),
};

export const updateTask = {
  params: Joi.object().keys({
    taskId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    banner: Joi.string(),
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.string(),
  }),
};

export const deleteTask = {
  params: Joi.object().keys({
    taskId: Joi.string().required(),
  }),
};
