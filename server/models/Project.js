const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['PLANNING', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED'],
      default: 'PLANNING',
    },
    plannedBudget: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    actualSpend: {
      type: Number,
      default: 0,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    members: {
      type: [String],
      default: [],
    },
    managerId: {
      type: String,
      required: true,
    },
    tenantId: {
      type: String,
      required: true,
    },
    alertStatus: {
      type: String,
      enum: ['ok', 'warning', 'overrun'],
      default: 'ok',
    },
  },
  {
    timestamps: true,
  }
);

// NO middleware here - removed completely
module.exports = mongoose.model('Project', ProjectSchema);