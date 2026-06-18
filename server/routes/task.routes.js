const express = require('express');
const router = express.Router(); // ← THIS WAS MISSING!
const Task = require('../models/Task');
const Project = require('../models/Project');
const authMiddleware = require('../middleware/auth.middleware');

// ✅ TEST ROUTE - Check if route file is working
router.get('/test', (req, res) => {
  res.json({ message: 'Task route is working!' });
});

// GET all tasks for a project
router.get('/projects/:projectId/tasks', authMiddleware, async (req, res) => {
  try {
    console.log('📋 Getting tasks for project:', req.params.projectId);
    const tasks = await Task.find({ projectId: req.params.projectId }).sort({ dueDate: 1 });
    res.json(tasks);
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ message: error.message });
  }
});

// POST create a task (WITH LOGGING)
router.post('/projects/:projectId/tasks', authMiddleware, async (req, res) => {
  console.log('📦 POST /tasks called');
  console.log('📋 Project ID:', req.params.projectId);
  console.log('📋 Body:', req.body);

  try {
    // Check if project exists
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      console.log('❌ Project not found');
      return res.status(404).json({ message: 'Project not found' });
    }

    console.log('✅ Project found:', project._id);

    // Create task
    const task = new Task({
      projectId: req.params.projectId,
      title: req.body.title,
      description: req.body.description || '',
      assignedTo: req.body.assignedTo || null,
      priority: req.body.priority || 'MEDIUM',
      dueDate: req.body.dueDate,
      estimatedHours: req.body.estimatedHours || 0,
      actualHours: req.body.actualHours || 0,
      dependsOn: req.body.dependsOn || [],
    });

    console.log('💾 Saving task...');
    const savedTask = await task.save();
    console.log('✅ Task saved:', savedTask._id);

    res.status(201).json(savedTask);
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(400).json({ message: error.message });
  }
});

// GET single task
router.get('/tasks/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update task
router.put('/tasks/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE task
router.delete('/tasks/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH update task status
router.patch('/tasks/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check dependencies before starting
    if (status === 'IN_PROGRESS' && task.dependsOn && task.dependsOn.length > 0) {
      const incompleteDeps = await Task.find({
        _id: { $in: task.dependsOn },
        status: { $ne: 'DONE' },
      });

      if (incompleteDeps.length > 0) {
        return res.status(400).json({
          message: `Cannot start task. Complete these first: ${incompleteDeps.map(d => d.title).join(', ')}`,
          incompleteDependencies: incompleteDeps,
        });
      }
    }

    task.status = status;
    if (status === 'DONE') {
      task.completedAt = new Date();
    }

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST assign employee
router.post('/tasks/:id/assign', authMiddleware, async (req, res) => {
  try {
    const { employeeId } = req.body;
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.assignedTo = employeeId;
    await task.save();

    res.json({ message: 'Employee assigned to task', task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST add dependency
router.post('/tasks/:id/dependencies', authMiddleware, async (req, res) => {
  try {
    const { dependsOnTaskId } = req.body;
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.dependsOn && task.dependsOn.includes(dependsOnTaskId)) {
      return res.status(400).json({ message: 'Dependency already exists' });
    }

    task.dependsOn.push(dependsOnTaskId);
    await task.save();

    res.json({ message: 'Dependency added', dependencies: task.dependsOn });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET Gantt data
router.get('/projects/:projectId/gantt', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const tasks = await Task.find({ projectId: project._id }).sort({ dueDate: 1 });

    const ganttData = {
      projectId: project._id,
      projectName: project.title,
      startDate: project.startDate,
      endDate: project.endDate,
      tasks: tasks.map(task => {
        const start = task.createdAt;
        const end = task.dueDate;
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        let progress = 0;
        if (task.status === 'DONE') progress = 100;
        else if (task.status === 'IN_PROGRESS') progress = 50;
        else if (task.status === 'REVIEW') progress = 75;

        return {
          id: task._id,
          name: task.title,
          start: start.toISOString().split('T')[0],
          end: end.toISOString().split('T')[0],
          duration,
          progress,
          dependencies: task.dependsOn || [],
          assignee: task.assignedTo || 'Unassigned',
          priority: task.priority,
          status: task.status,
        };
      }),
    };

    res.json(ganttData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;