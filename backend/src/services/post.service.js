import NotFoundError from '../errors/NotFoundError.js';
import PostModel from '../models/post.model.js';

export const createPost = async (createBody) => {
  return PostModel.create(createBody);
};

export const getAllPost = async (filter, options) => {
  const { page, limit } = options;

  const posts = await PostModel.paginate(
    {},
    {
      page,
      limit,
    },
  );

  return posts;
};

export const getPostById = async (id) => {
  const post = await PostModel.findById(id);

  if (!post) {
    throw new NotFoundError('Post not found');
  }

  return post;
};

export const updatePostById = async (postId, updateBody) => {
  const post = await getPostById(postId);

  Object.assign(post, updateBody);

  await post.save();

  return post;
};

export const deletePostById = async (postId) => {
  await PostModel.findByIdAndDelete(postId);
};
