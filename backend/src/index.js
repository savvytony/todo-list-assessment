import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import process from 'node:process';
import config from './configs/config.js';
import customResponse from './middlewares/customResponse.js';
import { errorConverter, errorHandler, invalidApiHandler } from './middlewares/error.js';
import routes from './routes/index.js';
import logger from './utils/logger.js';
import { morganError, morganSuccess } from './utils/morgan.js';

const app = express();

app.use(morganSuccess);
app.use(morganError);

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use(customResponse);

app.use('/api', routes);

app.use(invalidApiHandler);

app.use(errorConverter);

app.use(errorHandler);

const server = app.listen(config.port, () => logger.info(`Server is running at http://localhost:${config.port}`));

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
