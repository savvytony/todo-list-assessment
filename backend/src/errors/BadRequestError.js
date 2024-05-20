import httpStatus from 'http-status';
import ApiError from './ApiError.js';

class BadRequestError extends ApiError {
  constructor(message, stack) {
    super(httpStatus.BAD_REQUEST, message || httpStatus[httpStatus.BAD_REQUEST], false, stack);
  }
}

export default BadRequestError;
