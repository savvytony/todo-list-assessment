import mongoose from '../configs/mongoose.js';

const tokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    expiredAt: {
      type: Date,
      required: true,
    },
    revokedAt: {
      type: Date,
      required: false,
    },
  },
  {
    collection: 'token',
    timestamps: true,
  },
);

const TokenModel = mongoose.model('token', tokenSchema);

export default TokenModel;
