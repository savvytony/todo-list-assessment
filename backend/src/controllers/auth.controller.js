import httpStatus from 'http-status';

import * as authService from '../services/auth.service.js';
import * as tokenService from '../services/token.service.js';
import * as userService from '../services/user.service.js';

import apiResponse from '../utils/apiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const login = asyncHandler(async (req, res) => {
  const user = await authService.login(req.body);
  const accessToken = await tokenService.signAccessToken(user);

  return res.status(httpStatus.OK).json(apiResponse(httpStatus.OK, 'Login successfully', { accessToken, user }));
});

export const register = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  const accessToken = await tokenService.signAccessToken(user);

  return res.status(httpStatus.OK).json(apiResponse(httpStatus.OK, 'Register successfully', { accessToken, user }));
});

export const logout = asyncHandler(async (req, res) => {
  await authService.logout(req.user);

  return res.status(httpStatus.OK).json(apiResponse(httpStatus.OK, 'Logout successfully'));
});
