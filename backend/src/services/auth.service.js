import UnauthorizedError from '../errors/UnauthorizedError.js';
import * as tokenService from './token.service.js';
import * as userService from './user.service.js';

export const login = async ({ username, password }) => {
  const user = await userService.getUserByUsername(username);

  if (!user) {
    throw new UnauthorizedError('Incorrect username');
  }

  const isPasswordMatch = await user.isPasswordMatch(password);

  if (!isPasswordMatch) {
    throw new UnauthorizedError('Incorrect password');
  }

  return user;
};

export const logout = async (token) => {
  await tokenService.revokeToken(token);
};
