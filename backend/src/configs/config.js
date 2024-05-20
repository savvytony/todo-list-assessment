import dotenv from 'dotenv';
import Joi from 'joi';
import process from 'node:process';
import path from 'path';
import __dirname from '../utils/dirname.js';

dotenv.config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`),
});

const envVarsScheme = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development').required(),
    PORT: Joi.number().default(5000),
    MONGO_URI: Joi.string().required().description('Mongo DB URI'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_EXPIRATION: Joi.number().default(30).description('minutes after which access tokens expire'),
  })
  .unknown();

const { value: envVars, error } = envVarsScheme.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  mongoose: {
    uri: envVars.MONGO_URI,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    expiration: envVars.JWT_EXPIRATION,
  },
};

export default config;
