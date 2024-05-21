import { createClient } from 'redis';
import logger from '../utils/logger.js';
import config from './config.js';

const { username, password, host, port } = config.redis;
const url = username && password ? `redis://${username}:${password}@${host}:${port}` : `redis://${host}:${port}`;

const client = createClient({
  url,
});

try {
  await client.connect();

  logger.info('Redis connected successfully.');
} catch (error) {
  throw new Error(`Unable to connect to Redis: ${error}`);
}

export default client;
