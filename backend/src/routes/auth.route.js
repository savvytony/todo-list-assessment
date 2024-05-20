import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import authentication from '../middlewares/authentication.js';
import validate from '../middlewares/validate.js';
import * as authValidation from '../validations/auth.validation.js';

const router = express.Router();

router.post('/login', validate(authValidation.login), authController.login);
router.post('/register', validate(authValidation.register), authController.register);
router.use(authentication);
router.post('/logout', authController.logout);

export default router;
