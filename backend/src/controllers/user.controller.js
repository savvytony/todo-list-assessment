import httpStatus from 'http-status';
import pick from 'lodash/pick.js';
import * as userService from '../services/user.service.js';
import apiResponse from '../utils/apiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getListUser = asyncHandler(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ['sortBy', 'page', 'limit']);

  const users = await userService.getAllUsers(filter, options);

  return res.status(httpStatus.OK).json(apiResponse(httpStatus.OK, httpStatus[httpStatus.OK], users));
});

export const getUser = asyncHandler(async (_req, _res) => {});

export const updateUser = asyncHandler(async (_req, _res) => {});

export const deleteUser = asyncHandler(async (_req, _res) => {});
