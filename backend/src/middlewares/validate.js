import Joi from 'joi';
import pick from 'lodash/pick.js';
import BadRequestError from '../errors/BadRequestError.js';

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ['params', 'query', 'body']);
  const object = pick(req, Object.keys(validSchema));

  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: 'key' } })
    .validate(object);

  if (error) {
    const errorMessage = error.details.map((details) => details.message).join(', ');

    return next(new BadRequestError(errorMessage));
  }

  Object.assign(req, value);

  return next();
};

export default validate;
