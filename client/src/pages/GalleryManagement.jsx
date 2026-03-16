import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getGallery, uploadPhoto, deletePhoto } from '../api'
import './GalleryManagement.css'

function GalleryManagement() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [formData, setFormData] = useState({ title: '', category: 'field-visit' })
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/admin')
      return
    }
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      const { data } = await getGallery()
      setPhotos(data)
    } catch (error) {
      console.log('Error fetching gallery:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!photo) return alert('Please select a photo')
    try {
      const data = new FormData()
      data.append('title', formData.title)
      data.append('category', formData.category)
      data.append('photo', photo)
      await uploadPhoto(data)
      fetchPhotos()
      setShowForm(false)
      setPhoto(null)
      setFormData({ title: '', category: 'field-visit' })
    } catch (error) {
      console.log('Error uploading photo:', error)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      try {
        await deletePhoto(id)
        fetchPhotos()
      } catch (error) {
        console.log('Error deleting photo:', error)
      }
    }
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-symbol">⊕</span>
          <h3>MmcfraNkcsoc</h3>
          <p>Admin Panel</p>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="sidebar-link">🏠 Dashboard</Link>
          <Link to="/dashboard/members" className="sidebar-link">👥 Members</Link>
          <Link to="/dashboard/blog" className="sidebar-link">📝 Blog Posts</Link>
          <Link to="/dashboard/gallery" className="sidebar-link active">🖼️ Gallery</Link>
        </nav>
        <div className="sidebar-footer">
          <p className="admin-name">👤 {JSON.parse(localStorage.getItem('adminInfo'))?.name}</p>
          <button onClick={() => {
            localStorage.removeItem('adminToken')
            localStorage.removeItem('adminInfo')
            navigate('/admin')
          }} className="logout-btn">Logout</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-row">
            <div>
              <h1>Gallery</h1>
              <p>Upload and manage photos</p>
            </div>
            <button className="new-post-btn" onClick={() => setShowForm(!showForm)}>
              + Upload Photo
            </button>
          </div>
        </div>

        {showForm && (
          <div className="post-form-card">
            <h3>Upload New Photo</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. School visit at Kumasi"
                  required
                />
              </div>
              <div className="form-group">
                <label>Category *</label>
                <select
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="field-visit">Field Visit</option>
                  <option value="team">Team</option>
                  <option value="event">Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Photo *</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => setPhoto(e.target.files[0])}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">Upload Photo</button>
                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="dashboard-loading">
            <span>⊕</span>
            <p>Loading gallery...</p>
          </div>
        ) : photos.length === 0 ? (
          <div className="no-data">
            <span>🖼️</span>
            <p>No photos yet. Upload your first photo!</p>
          </div>
        ) : (
          <div className="admin-gallery-grid">
            {photos.map(photo => (
              <div className="admin-gallery-item" key={photo._id}>
                <img src={photo.photoUrl} alt={photo.title} />
                <div className="admin-gallery-info">
                  <p>{photo.title}</p>
                  <span>{photo.category.replace('-', ' ')}</span>
                </div>
                <button
                  className="reject-btn"
                  onClick={() => handleDelete(photo._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default GalleryManagement