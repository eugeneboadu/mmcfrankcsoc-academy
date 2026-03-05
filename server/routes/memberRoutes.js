const express = require('express')
const router = express.Router()
const { registerMember, getAllMembers, updateMemberStatus } = require('../controllers/memberController')
const protect = require('../middleware/authMiddleware')

router.post('/register', registerMember)
router.get('/', protect, getAllMembers)
router.put('/:id/status', protect, updateMemberStatus)

module.exports = router