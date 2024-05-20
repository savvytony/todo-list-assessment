import UnauthorizedError from '../errors/UnauthorizedError.js';
import * as tokenService from '../services/token.service.js';
import * as userService from '../services/user.service.js';
import asyncHandler from '../utils/asyncHandler.js';

const authentication = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthorizedError();
  }

  const [type, token] = authorization.split(' ');

  if (type.toLowerCase() !== 'bearer') {
    throw new UnauthorizedError('Authentication type wrong');
  }

  if (!token) {
    throw new UnauthorizedError('Token is empty');
  }

  const decode = await tokenService.verifyToken(token);

  const user = await userService.getUserById(decode.user);

  if (user) {
    user.password = undefined;
  }

  req.user = user;

  next();
});

export default authentication;
