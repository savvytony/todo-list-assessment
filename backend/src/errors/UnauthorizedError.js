import httpStatus from 'http-status';
import ApiError from './ApiError.js';

class UnauthorizedError extends ApiError {
  constructor(message, stack) {
    super(httpStatus.UNAUTHORIZED, message || httpStatus[httpStatus.UNAUTHORIZED], false, stack);
  }
}

export default UnauthorizedError;
