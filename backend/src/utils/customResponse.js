import { isDev } from './checkEnv.js';

const customResponse = (req, res, next) => {
  res.successResponse = (statusCode, message, data) => {
    return res.status(statusCode).json({
      status: statusCode,
      message,
      data,
    });
  };

  res.errorResponse = (statusCode, message, data) => {
    return res.status(statusCode).json({
      status: statusCode,
      message,
      ...(isDev() && { errors: data }),
    });
  };

  next();
};

export default customResponse;
