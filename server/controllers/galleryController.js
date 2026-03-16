const Gallery = require('../models/Gallery')

const getGallery = async (req, res) => {
  try {
    const photos = await Gallery.find().sort({ createdAt: -1 })
    res.status(200).json(photos)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const uploadPhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a photo' })
    }
    const photo = await Gallery.create({
      title: req.body.title,
      photoUrl: req.file.path,
      category: req.body.category || 'field-visit',
      uploadedBy: req.admin.name
    })
    res.status(201).json({ message: 'Photo uploaded successfully', photo })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const deletePhoto = async (req, res) => {
  try {
    const photo = await Gallery.findByIdAndDelete(req.params.id)
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' })
    }
    res.status(200).json({ message: 'Photo deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = { getGallery, uploadPhoto, deletePhoto }