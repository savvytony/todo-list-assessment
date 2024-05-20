import { TODO } from '../constants/index.js';
import NotFoundError from '../errors/NotFoundError.js';
import TaskModel from '../models/task.model.js';

export const createTask = async (createBody, user) => {
  return TaskModel.create({
    ...createBody,
    status: TODO,
    createdBy: user._id,
  });
};

export const getAllTask = async (filter, options) => {
  const { page, limit } = options;

  const tasks = await TaskModel.paginate(
    {},
    {
      page,
      limit,
    },
  );

  return tasks;
};

export const getTaskById = async (id) => {
  const task = await TaskModel.findById(id);

  if (!task) {
    throw new NotFoundError('Task not found');
  }

  return task;
};

export const updateTaskById = async (taskId, updateBody) => {
  const task = await getTaskById(taskId);

  Object.assign(task, updateBody);

  await task.save();

  return task;
};

export const deleteTaskById = async (taskId) => {
  await TaskModel.findByIdAndDelete(taskId);
};
