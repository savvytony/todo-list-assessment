import httpStatus from 'http-status';
import ApiError from './ApiError.js';

class NotFoundError extends ApiError {
  constructor(message, stack) {
    super(httpStatus.NOT_FOUND, message || httpStatus[httpStatus.NOT_FOUND], false, stack);
  }
}

export default NotFoundError;
