import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getAllPosts, createPost, updatePost, deletePost } from '../api'
import './BlogManagement.css'

function BlogManagement() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    location: '',
    date: '',
    photoUrl: '',
    published: false
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/admin')
      return
    }
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const { data } = await getAllPosts()
      setPosts(data)
    } catch (error) {
      console.log('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingPost) {
        await updatePost(editingPost._id, formData)
      } else {
        await createPost(formData)
      }
      fetchPosts()
      resetForm()
    } catch (error) {
      console.log('Error saving post:', error)
    }
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      location: post.location,
      date: post.date.substring(0, 10),
      photoUrl: post.photoUrl || '',
      published: post.published
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id)
        fetchPosts()
      } catch (error) {
        console.log('Error deleting post:', error)
      }
    }
  }

  const resetForm = () => {
    setShowForm(false)
    setEditingPost(null)
    setFormData({
      title: '',
      content: '',
      location: '',
      date: '',
      photoUrl: '',
      published: false
    })
  }

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-symbol">⊕</span>
          <h3>MmcfraNkcsoc</h3>
          <p>Admin Panel</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link">
            🏠 Dashboard
          </Link>
          <Link to="/dashboard/members" className="sidebar-link">
            👥 Members
          </Link>
          <Link to="/dashboard/blog" className="sidebar-link active">
            📝 Blog Posts
          </Link>
        </nav>
        <div className="sidebar-footer">
          <p className="admin-name">👤 {JSON.parse(localStorage.getItem('adminInfo'))?.name}</p>
          <button onClick={() => {
            localStorage.removeItem('adminToken')
            localStorage.removeItem('adminInfo')
            navigate('/admin')
          }} className="logout-btn">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-row">
            <div>
              <h1>Blog Posts</h1>
              <p>Create and manage field stories</p>
            </div>
            <button
              className="new-post-btn"
              onClick={() => { resetForm(); setShowForm(true) }}
            >
              + New Post
            </button>
          </div>
        </div>

        {/* POST FORM */}
        {showForm && (
          <div className="post-form-card">
            <h3>{editingPost ? 'Edit Post' : 'Create New Post'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Post title"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Kumasi, Ashanti Region"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Photo URL (optional)</label>
                <input
                  type="text"
                  name="photoUrl"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  placeholder="https://link-to-photo.jpg"
                />
              </div>

              <div className="form-group">
                <label>Content *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your field story here..."
                  rows="8"
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleChange}
                  />
                  <span>Publish this post immediately</span>
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
                <button type="button" className="cancel-btn" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* POSTS LIST */}
        {loading ? (
          <div className="dashboard-loading">
            <span>⊕</span>
            <p>Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="no-data">
            <span>📝</span>
            <p>No posts yet. Create your first field story!</p>
          </div>
        ) : (
          <div className="posts-list">
            {posts.map(post => (
              <div className="post-card" key={post._id}>
                <div className="post-card-info">
                  <div className="post-card-meta">
                    <span className={`status-badge ${post.published ? 'approved' : 'pending'}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                    <span className="post-date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="post-location">📍 {post.location}</p>
                  <p className="post-excerpt">{post.content.substring(0, 120)}...</p>
                </div>
                <div className="post-card-actions">
                  <button
                    className="view-btn"
                    onClick={() => handleEdit(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default BlogManagement