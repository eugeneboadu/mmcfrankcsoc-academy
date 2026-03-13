const Post = require('../models/Post')

const getPublishedPosts = async (req, res) => {
  try {
    const posts = await Post.find({ published: true }).sort({ date: -1 })
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 })
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const createPost = async (req, res) => {
  try {
    const postData = {
      ...req.body,
      author: req.admin.name,
      photoUrl: req.file ? req.file.path : ''
    }
    const post = await Post.create(postData)
    res.status(201).json({ message: 'Post created successfully', post })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      updatedAt: Date.now()
    }
    if (req.file) {
      updateData.photoUrl = req.file.path
    }
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json({ message: 'Post updated successfully', post })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json({ message: 'Post deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = { getPublishedPosts, getAllPosts, createPost, updatePost, deletePost }