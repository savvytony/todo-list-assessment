import mongoosePaginate from 'mongoose-paginate-v2';
import mongoose from '../configs/mongoose.js';
import { compare, hash } from '../utils/bcrypt.js';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    collection: 'user',
    timestamps: true,
  },
);

userSchema.plugin(mongoosePaginate)

userSchema.statics.isUsernameTaken = async function (username) {
  const user = await this.findOne({ username });

  return user;
};

userSchema.methods.isPasswordMatch = async function (password) {
  return compare(password, this.password);
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = hash(this.password);
  }

  next();
});

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
