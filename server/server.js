const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB error:', err))

// ROUTES
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/notifications', require('./routes/notification.routes'))

// TEST ROUTE
app.get('/', (req, res) => {
  res.json({ msg: 'Amdox ERP server is running' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})