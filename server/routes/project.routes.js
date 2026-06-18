const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const authMiddleware = require('../middleware/auth.middleware');  // ← ADDED

// GET all projects
router.get('/projects', authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({ tenantId: req.user.tenantId }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single project
router.get('/projects/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      tenantId: req.user.tenantId
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create project
router.post('/projects', authMiddleware, async (req, res) => {
  try {
    const project = new Project({
      ...req.body,
      tenantId: req.user.tenantId,
    });
    const saved = await project.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update project
router.put('/projects/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, tenantId: req.user.tenantId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE project
router.delete('/projects/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      tenantId: req.user.tenantId
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET budget alert
router.get('/projects/:id/budget', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      tenantId: req.user.tenantId
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const percentageUsed = (project.actualSpend / project.plannedBudget) * 100;
    const isOverBudget = project.actualSpend > project.plannedBudget * 1.10;
    const overrunAmount = isOverBudget ? project.actualSpend - project.plannedBudget : 0;
    const overrunPercentage = isOverBudget ? (overrunAmount / project.plannedBudget) * 100 : 0;

    let alertMessage = null;
    if (isOverBudget) {
      alertMessage = `⚠️ ALERT: Project "${project.title}" has exceeded budget by ${overrunPercentage.toFixed(2)}%`;
    }

    res.json({
      projectId: project._id,
      projectName: project.title,
      plannedBudget: project.plannedBudget,
      actualSpend: project.actualSpend,
      percentageUsed: percentageUsed.toFixed(2),
      isOverBudget,
      overrunAmount,
      overrunPercentage: overrunPercentage.toFixed(2),
      alertMessage,
      alertStatus: project.alertStatus,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;