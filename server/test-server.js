const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/amdx_erp')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Simple test route
app.get('/test', (req, res) => {
  res.json({ message: 'Test route working!' });
});

// Import routes
const projectRoutes = require('./routes/project.routes');
const taskRoutes = require('./routes/task.routes');

app.use('/api', projectRoutes);
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Amdox ERP API is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:3000`);
});