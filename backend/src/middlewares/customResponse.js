import httpStatus from 'http-status';
import { isDev } from '../utils/checkEnv.js';

const customResponse = (req, res, next) => {
  res.respond = (data = null, message = httpStatus[httpStatus.OK], status = httpStatus.OK) => {
    if (status >= 400) {
      return res.status(status).json({
        status,
        message,
        ...(isDev() && { errors: data }),
      });
    }

    return res.status(status).json({
      status,
      message,
      data,
    });
  };

  next();
};

export default customResponse;
