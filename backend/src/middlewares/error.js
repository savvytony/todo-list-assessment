import httpStatus from 'http-status';
import mongoose from 'mongoose';
import config from '../configs/config.js';
import ApiError from '../errors/ApiError.js';
import logger from '../utils/logger.js';

export const invalidApiHandler = (req, res, next) =>
  next(new ApiError(httpStatus.NOT_FOUND, `Request URL ${req.path} not found`));

export const errorConverter = (err, req, res, next) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode =
      err.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || httpStatus[statusCode];

    error = new ApiError(statusCode, message, false, err.stack);
  }

  next(error);
};

export const errorHandler = (err, req, res, _next) => {
  let { statusCode, message } = err;

  if (config.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    status: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  logger.error(err);

  return res.status(statusCode).json(response);
};
