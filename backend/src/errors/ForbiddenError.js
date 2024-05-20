import httpStatus from 'http-status';
import ApiError from './ApiError.js';

class ForbiddenError extends ApiError {
  constructor(message, stack) {
    super(httpStatus.FORBIDDEN, message || httpStatus[httpStatus.FORBIDDEN], false, stack);
  }
}

export default ForbiddenError;
