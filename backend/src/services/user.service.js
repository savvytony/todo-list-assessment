import BadRequestError from '../errors/BadRequestError.js';
import NotFoundError from '../errors/NotFoundError.js';
import UserModel from '../models/user.model.js';

export const getUserByUsername = (username) => UserModel.findOne({ username });

export const createUser = async ({ username, password }) => {
  if (await UserModel.isUsernameTaken(username)) {
    throw new BadRequestError('Username already taken');
  }

  const user = await UserModel.create({
    username,
    password,
  });

  user.password = undefined;

  return user;
};

export const getUserById = async (userId) => {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return user;
};
