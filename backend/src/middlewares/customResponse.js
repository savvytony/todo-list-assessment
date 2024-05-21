import httpStatus from 'http-status';
import { isDev } from '../utils/checkEnv.js';

const customResponse = (req, res, next) => {
  res.respond = (data = null, status = httpStatus.OK) => {
    return res.status(status).json({
      data,
    });
  };

  res.errorRespond = (data = null, status, message = '') => {
    return res.status(status).json({
      message,
      ...(isDev() && { errors: data }),
    });
  };

  next();
};

export default customResponse;
