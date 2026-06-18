const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection with timeout options
mongoose.connect('mongodb://127.0.0.1:27017/amdx_erp', {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully!');
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
});

// Minimal test route
app.get('/test', (req, res) => {
  res.json({ message: 'Test route works!' });
});

// Import project routes
const projectRoutes = require('./routes/project.routes');
app.use('/api', projectRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Test server running on http://localhost:${PORT}`);
});