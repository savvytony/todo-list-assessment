import httpStatus from 'http-status';
import pick from 'lodash/pick.js';
import * as taskService from '../services/task.service.js';
import asyncHandler from '../utils/asyncHandler.js';

export const createTask = asyncHandler(async (req, res) => {
  const task = await taskService.createTask(req.body, req.user);

  return res.respond(task, httpStatus.CREATED);
});

export const getAllTask = asyncHandler(async (req, res) => {
  const filter = pick(req.query, ['status']);
  const options = pick(req.query, ['sortBy', 'page', 'limit']);

  const task = await taskService.getAllTask(filter, options, req.user);

  return res.respond(task);
});

export const getTaskById = asyncHandler(async (req, res) => {
  const task = await taskService.getTaskById(req.params.taskId);

  return res.respond(task);
});

export const updateTask = asyncHandler(async (req, res) => {
  const task = await taskService.updateTaskById(req.params.taskId, req.body);

  return res.respond(task);
});

export const deleteTask = asyncHandler(async (req, res) => {
  await taskService.deleteTaskById(req.params.taskId);

  return res.respond();
});
