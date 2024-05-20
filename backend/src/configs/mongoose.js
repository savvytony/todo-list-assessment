import mongoose from 'mongoose';
import logger from '../utils/logger.js';
import config from './config.js';

try {
  await mongoose.connect(config.mongoose.uri, config.mongoose.options);

  logger.info('The connection to the database has been established successfully.');
} catch (error) {
  throw new Error(`Unable to connect to the database: ${error}`);
}

export default mongoose;
