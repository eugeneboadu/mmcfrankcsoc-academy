const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const Admin = require('./models/Admin')

dotenv.config()

const admins = [
  {
    name: 'Eugene Boadu',
    email: 'eugene@mmcfrankcsoc.org',
    passwordHash: '',
    role: 'admin'
  },
  {
    name: 'Admin Two',
    email: 'admin2@mmcfrankcsoc.org',
    passwordHash: '',
    role: 'admin'
  },
  {
    name: 'Admin Three',
    email: 'admin3@mmcfrankcsoc.org',
    passwordHash: '',
    role: 'admin'
  }
]

const seedAdmins = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✅ Connected to MongoDB')

    await Admin.deleteMany({})
    console.log('🗑️ Cleared existing admins')

    for (let admin of admins) {
      const salt = await bcrypt.genSalt(10)
      admin.passwordHash = await bcrypt.hash('Mmcadmin2024', salt)
    }

    await Admin.insertMany(admins)
    console.log('✅ Admins seeded successfully')

    process.exit()
  } catch (error) {
    console.log('❌ Seeding failed:', error.message)
    process.exit(1)
  }
}

seedAdmins()