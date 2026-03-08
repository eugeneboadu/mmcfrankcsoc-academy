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

app.get('/seed-admins', async (req, res) => {
  try {
    const bcrypt = require('bcryptjs')
    const Admin = require('./models/Admin')

    await Admin.deleteMany({})

    const admins = [
      { name: 'Eugene Boadu', email: 'eugene@mmcfrankcsoc.org' },
      { name: 'Admin Two', email: 'admin2@mmcfrankcsoc.org' },
      { name: 'Admin Three', email: 'admin3@mmcfrankcsoc.org' }
    ]

    for (let admin of admins) {
      const salt = await bcrypt.genSalt(10)
      admin.passwordHash = await bcrypt.hash('Mmcadmin2024', salt)
      admin.role = 'admin'
    }

    await Admin.insertMany(admins)
    res.json({ message: '✅ Admins seeded successfully' })
  } catch (error) {
    res.json({ message: '❌ Seeding failed', error: error.message })
  }
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