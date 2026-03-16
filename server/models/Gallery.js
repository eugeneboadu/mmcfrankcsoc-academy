const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['field-visit', 'team', 'event', 'other'],
    default: 'field-visit'
  },
  uploadedBy: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Gallery', gallerySchema)