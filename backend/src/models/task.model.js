import mongoosePaginate from 'mongoose-paginate-v2';
import mongoose from '../configs/mongoose.js';
import { TASK_STATUS } from '../constants/index.js';

const taskSchema = new mongoose.Schema(
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
    order: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: TASK_STATUS,
      require: true,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    collection: 'task',
    timestamps: true,
  },
);

taskSchema.plugin(mongoosePaginate);

const TaskModel = mongoose.model('task', taskSchema);

export default TaskModel;
