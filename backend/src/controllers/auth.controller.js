import * as authService from '../services/auth.service.js';
import * as tokenService from '../services/token.service.js';
import * as userService from '../services/user.service.js';
import asyncHandler from '../utils/asyncHandler.js';
import extractTokenFromRequest from '../utils/extractTokenFromRequest.js';

export const login = asyncHandler(async (req, res) => {
  const user = await authService.login(req.body);
  const accessToken = await tokenService.signAccessToken(user);

  user.password = undefined;

  return res.respond({ accessToken, user });
});

export const register = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  const accessToken = await tokenService.signAccessToken(user);

  user.password = undefined;

  return res.respond({ accessToken, user });
});

export const logout = asyncHandler(async (req, res) => {
  const token = extractTokenFromRequest(req);

  await authService.logout(token);

  return res.respond();
});
