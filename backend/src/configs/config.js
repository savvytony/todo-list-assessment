import dotenv from 'dotenv';
import Joi from 'joi';
import process from 'node:process';
import path from 'path';
import __dirname from '../utils/dirname.js';

dotenv.config({
  path: path.join(__dirname, `../../.env`),
});

const envVarsScheme = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development').required(),
    PORT: Joi.number().default(5000),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_EXPIRATION: Joi.number().default(30).description('minutes after which access tokens expire'),
    MONGO_URI: Joi.string().required().description('Mongo DB URI'),
    REDIS_USERNAME: Joi.string().description('Redis username').allow('', null),
    REDIS_PASSWORD: Joi.string().description('Redis password').allow('', null),
    REDIS_HOST: Joi.string().description('Redis host'),
    REDIS_PORT: Joi.string().default(6379).description('Redis port'),
  })
  .unknown();

const { value: envVars, error } = envVarsScheme.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwt: {
    secret: envVars.JWT_SECRET,
    expiration: envVars.JWT_EXPIRATION,
  },
  mongoose: {
    uri: envVars.MONGO_URI,
  },
  redis: {
    username: envVars.REDIS_USERNAME,
    password: envVars.REDIS_PASSWORD,
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
  },
};

export default config;
