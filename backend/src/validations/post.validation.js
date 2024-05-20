import Joi from 'joi';

export const createPost = {
  body: Joi.object().keys({
    banner: Joi.string().uri(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

export const getAllPost = {
  query: Joi.object().keys({
    limit: Joi.string().default(10),
    page: Joi.string().default(1),
  }),
};

export const getPostById = {
  params: Joi.object().keys({
    postId: Joi.string().required(),
  }),
};

export const updatePost = {
  params: Joi.object().keys({
    postId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    banner: Joi.string(),
    title: Joi.string(),
    description: Joi.string(),
  }),
};

export const deletePost = {
  params: Joi.object().keys({
    postId: Joi.string().required(),
  }),
};
