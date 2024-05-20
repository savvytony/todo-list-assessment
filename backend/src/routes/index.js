import express from 'express';
import authentication from '../middlewares/authentication.js';
import authRoute from './auth.route.js';
import taskRoute from './task.route.js';
import userRoute from './user.route.js';

const router = express.Router();

router.use('/auth', authRoute);
router.use(authentication);
router.use('/tasks', taskRoute);
router.use('/users', userRoute);

export default router;
