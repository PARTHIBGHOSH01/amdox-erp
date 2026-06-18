const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    assignedTo: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE', 'BLOCKED'],
      default: 'TODO',
    },
    priority: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'],
      default: 'MEDIUM',
    },
    dueDate: {
      type: Date,
      required: true,
    },
    estimatedHours: {
      type: Number,
      default: 0,
    },
    actualHours: {
      type: Number,
      default: 0,
    },
    dependsOn: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Task',
      default: [],
    },
    completedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// NO middleware here - removed completely
module.exports = mongoose.model('Task', TaskSchema);
TaskSchema.index({ projectId: 1 });

module.exports = mongoose.model('Task', TaskSchema);