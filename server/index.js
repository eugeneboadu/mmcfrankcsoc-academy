const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}))
app.use(express.json())

// Routes
const memberRoutes = require('./routes/memberRoutes')
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')

app.use('/api/members', memberRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)

// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'MmcfraNkcsoc Academy API is running',
    symbol: '⊕ Nyansapo'
  })
})

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`✅ Server running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch((error) => {
    console.log('❌ MongoDB connection failed:', error.message)
  })