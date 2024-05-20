import express from 'express';
import * as userController from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(userController.getListUser);

router.route('/:id').get(userController.getUser).put(userController.updateUser).delete(userController.deleteUser);

export default router;
