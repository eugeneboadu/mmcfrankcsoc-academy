import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getAllMembers, getAllPosts } from '../api'
import './Dashboard.css'

function Dashboard() {
  const [stats, setStats] = useState({
    totalMembers: 0,
    pendingMembers: 0,
    approvedMembers: 0,
    totalPosts: 0
  })
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const admin = JSON.parse(localStorage.getItem('adminInfo'))

  useEffect(() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/admin')
      return
    }
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [membersRes, postsRes] = await Promise.all([
        getAllMembers(),
        getAllPosts()
      ])
      const members = membersRes.data
      const posts = postsRes.data
      setStats({
        totalMembers: members.length,
        pendingMembers: members.filter(m => m.status === 'pending').length,
        approvedMembers: members.filter(m => m.status === 'approved').length,
        totalPosts: posts.length
      })
    } catch (error) {
      console.log('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminInfo')
    navigate('/admin')
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
          <Link to="/dashboard" className="sidebar-link active">
            🏠 Dashboard
          </Link>
          <Link to="/dashboard/members" className="sidebar-link">
            👥 Members
          </Link>
          <Link to="/dashboard/blog" className="sidebar-link">
            📝 Blog Posts
          </Link>
        </nav>

        <div className="sidebar-footer">
          <p className="admin-name">👤 {admin?.name}</p>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back, {admin?.name}</p>
        </div>

        {loading ? (
          <div className="dashboard-loading">
            <span>⊕</span>
            <p>Loading dashboard...</p>
          </div>
        ) : (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-icon">👥</span>
                <div>
                  <h2>{stats.totalMembers}</h2>
                  <p>Total Members</p>
                </div>
              </div>
              <div className="stat-card pending">
                <span className="stat-icon">⏳</span>
                <div>
                  <h2>{stats.pendingMembers}</h2>
                  <p>Pending Applications</p>
                </div>
              </div>
              <div className="stat-card approved">
                <span className="stat-icon">✅</span>
                <div>
                  <h2>{stats.approvedMembers}</h2>
                  <p>Approved Members</p>
                </div>
              </div>
              <div className="stat-card posts">
                <span className="stat-icon">📝</span>
                <div>
                  <h2>{stats.totalPosts}</h2>
                  <p>Blog Posts</p>
                </div>
              </div>
            </div>

            <div className="dashboard-actions">
              <h2>Quick Actions</h2>
              <div className="actions-grid">
                <Link to="/dashboard/members" className="action-card">
                  <span>👥</span>
                  <h3>Manage Members</h3>
                  <p>Review, approve or reject member applications</p>
                </Link>
                <Link to="/dashboard/blog" className="action-card">
                  <span>📝</span>
                  <h3>Manage Blog</h3>
                  <p>Create, edit and publish field stories</p>
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default Dashboard