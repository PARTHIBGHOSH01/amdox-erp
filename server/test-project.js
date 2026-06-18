const mongoose = require('mongoose');
const Project = require('./models/Project');

async function test() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('✅ Connected to MongoDB');

    // Create a test project
    const project = new Project({
      title: 'Test Project',
      description: 'Testing my model',
      plannedBudget: 10000,
      startDate: new Date(),
      managerId: 'emp_001',
      tenantId: 'tenant_001',
    });

    const saved = await project.save();
    console.log('✅ Project saved successfully!');
    console.log('Project ID:', saved._id);
    console.log('Title:', saved.title);
    console.log('Budget Percentage:', saved.budgetPercentage);
    console.log('Is Over Budget?', saved.isOverBudget());

    await mongoose.disconnect();
    console.log('✅ Test completed!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();