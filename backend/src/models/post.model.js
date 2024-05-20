import mongoosePaginate from 'mongoose-paginate-v2';
import mongoose from '../configs/mongoose.js';

const postSchema = new mongoose.Schema(
  {
    banner: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    collection: 'post',
    timestamps: true,
  },
);

postSchema.plugin(mongoosePaginate);

const PostModel = mongoose.model('post', postSchema);

export default PostModel;
