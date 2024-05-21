import httpStatus from 'http-status';
import pick from 'lodash/pick.js';
import * as postService from '../services/post.service.js';
import asyncHandler from '../utils/asyncHandler.js';

export const createPost = asyncHandler(async (req, res) => {
  const post = await postService.createPost(req.body, req.user);

  return res.successResponse(httpStatus.CREATED, httpStatus[httpStatus.CREATED], post);
});

export const getAllPost = asyncHandler(async (req, res) => {
  const filter = pick(req.query, []);
  const options = pick(req.query, ['sortBy', 'page', 'limit']);

  const post = await postService.getAllPost(filter, options);

  return res.successResponse(httpStatus.OK, httpStatus[httpStatus.OK], post);
});

export const getPostById = asyncHandler(async (req, res) => {
  const post = await postService.getPostById(req.params.postId);

  return res.successResponse(httpStatus.OK, httpStatus[httpStatus.OK], post);
});

export const updatePost = asyncHandler(async (req, res) => {
  const post = await postService.updatePostById(req.params.postId, req.body);

  return res.successResponse(httpStatus.OK, httpStatus[httpStatus.OK], post);
});

export const deletePost = asyncHandler(async (req, res) => {
  const post = await postService.deletePostById(req.params.postId);

  return res.successResponse(httpStatus.OK, httpStatus[httpStatus.OK], post);
});
