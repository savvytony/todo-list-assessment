import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import config from '../configs/config.js';
import redisClient from '../configs/redis.js';
import { TOKEN_BLACK_LIST_CACHE_KEY } from '../constants/index.js';
import UnauthorizedError from '../errors/UnauthorizedError.js';

export const signToken = async (userId, expires) => {
  const payload = {
    sub: userId,
    iat: dayjs().unix(),
    exp: expires.unix(),
  };

  return jwt.sign(payload, config.jwt.secret);
};

export const verifyToken = async (token) => {
  return jwt.verify(token, config.jwt.secret, (error, decode) => {
    if (!error) {
      return decode;
    }

    switch (error.name) {
      case 'TokenExpiredError':
        throw new UnauthorizedError('Token expired');
      case 'NotBeforeError':
        throw new UnauthorizedError('Token not active');
      default:
        throw new UnauthorizedError(error.message);
    }
  });
};

export const signAccessToken = async (user) => {
  const { expiration } = config.jwt;

  const accessTokenExpires = dayjs().add(expiration, 'minutes');

  return signToken(user._id, accessTokenExpires);
};

export const isTokenRevoked = async (token) => {
  const payload = jwt.verify(token, config.jwt.secret);

  const isRevoked = await redisClient.get(`${TOKEN_BLACK_LIST_CACHE_KEY}:${payload.sub}:${payload.exp}`);

  return isRevoked;
};

export const revokeToken = async (token) => {
  const payload = jwt.verify(token, config.jwt.secret);

  await redisClient.set(`${TOKEN_BLACK_LIST_CACHE_KEY}:${payload.sub}:${payload.exp}`, 1, {
    EXAT: payload.exp,
  });
};
