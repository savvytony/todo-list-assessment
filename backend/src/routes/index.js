import express from 'express';
import authentication from '../middlewares/authentication.js';
import authRoute from './auth.route.js';
import postRoute from './post.route.js';
import taskRoute from './task.route.js';

const router = express.Router();

router.use('/auth', authRoute);
router.use(authentication);
router.use('/posts', postRoute);
router.use('/tasks', taskRoute);

export default router;
