import express from 'express';
import * as taskController from '../controllers/task.controller.js';
import validate from '../middlewares/validate.js';
import * as taskValidation from '../validations/task.validation.js';

const router = express.Router();

router
  .route('/')
  .post(validate(taskValidation.createTask), taskController.createTask)
  .get(validate(taskValidation.getAllTask), taskController.getAllTask);

router
  .route('/:taskId')
  .get(validate(taskValidation.getTaskById), taskController.getTaskById)
  .put(validate(taskValidation.updateTask), taskController.updateTask)
  .delete(validate(taskValidation.deleteTask), taskController.deleteTask);

export default router;
