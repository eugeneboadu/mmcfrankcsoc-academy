const express = require('express')
const router = express.Router()
const { getGallery, uploadPhoto, deletePhoto } = require('../controllers/galleryController')
const protect = require('../middleware/authMiddleware')
const { upload } = require('../utils/cloudinary')

router.get('/', getGallery)
router.post('/', protect, upload.single('photo'), uploadPhoto)
router.delete('/:id', protect, deletePhoto)

module.exports = router