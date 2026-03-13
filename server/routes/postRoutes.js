const express = require('express')
const router = express.Router()
const { getAllPosts, getPublishedPosts, createPost, updatePost, deletePost } = require('../controllers/postController')
const protect = require('../middleware/authMiddleware')
const { upload } = require('../utils/cloudinary')

router.get('/published', getPublishedPosts)
router.get('/', protect, getAllPosts)
router.post('/', protect, upload.single('photo'), createPost)
router.put('/:id', protect, upload.single('photo'), updatePost)
router.delete('/:id', protect, deletePost)

module.exports = router