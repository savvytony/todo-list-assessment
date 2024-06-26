import Joi from 'joi';
import { TASK_STATUS } from '../constants/index.js';

export const createTask = {
  body: Joi.object().keys({
    banner: Joi.string().uri(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

export const getAllTask = {
  query: Joi.object().keys({
    limit: Joi.string().default(10),
    page: Joi.string().default(1),
    status: Joi.string().valid(...TASK_STATUS),
  }),
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
