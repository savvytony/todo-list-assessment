import UnauthorizedError from '../errors/UnauthorizedError.js';
import * as tokenService from '../services/token.service.js';
import * as userService from '../services/user.service.js';
import asyncHandler from '../utils/asyncHandler.js';
import extractTokenFromRequest from '../utils/extractTokenFromRequest.js';

const authentication = asyncHandler(async (req, res, next) => {
  const token = extractTokenFromRequest(req);

  if (!token) {
    throw new UnauthorizedError();
  }

  const isTokenRevoked = await tokenService.isTokenRevoked(token);

  if (isTokenRevoked) {
    throw new UnauthorizedError();
  }

  const decode = await tokenService.verifyToken(token);

  const user = await userService.getUserById(decode.sub);

  if (user) {
    user.password = undefined;
  }

  req.user = user;

  next();
});

export default authentication;
