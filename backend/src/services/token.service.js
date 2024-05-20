import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import config from '../configs/config.js';
import UnauthorizedError from '../errors/UnauthorizedError.js';
import TokenModel from '../models/token.model.js';

export const signToken = async (userId, expires) => {
  const token = await TokenModel.create({
    expiredAt: expires,
    user: userId,
  });

  const payload = {
    sub: userId,
    iat: dayjs().unix(),
    exp: expires.unix(),
    jti: token._id,
  };

  return jwt.sign(payload, config.jwt.secret);
};

export const verifyToken = async (token) => {
  const payload = jwt.verify(token, config.jwt.secret, (error, decode) => {
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

  const tokenDoc = await TokenModel.findOne({
    _id: payload.jti,
    user: payload.sub,
    revokedAt: null,
    expiredAt: {
      $gte: dayjs().unix(),
    },
  });

  if (!tokenDoc) {
    throw new UnauthorizedError();
  }

  return tokenDoc;
};

export const signAccessToken = async (user) => {
  const { expiration } = config.jwt;

  const accessTokenExpires = dayjs().add(expiration, 'minutes');

  return signToken(user._id, accessTokenExpires);
};

export const revokeToken = async (user) => {
  await TokenModel.updateMany(
    {
      user: user._id,
      revokedAt: null,
    },
    {
      revokedAt: dayjs().unix(),
    },
  );
};
