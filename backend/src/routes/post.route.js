import express from 'express';
import * as postController from '../controllers/post.controller.js';
import validate from '../middlewares/validate.js';
import * as postValidation from '../validations/post.validation.js';

const router = express.Router();

router
  .route('/')
  .post(validate(postValidation.createPost), postController.createPost)
  .get(validate(postValidation.getAllPost), postController.getAllPost);

router
  .route('/:postId')
  .get(validate(postValidation.getPostById), postController.getPostById)
  .put(validate(postValidation.updatePost), postController.updatePost)
  .delete(validate(postValidation.deletePost), postController.deletePost);

export default router;
