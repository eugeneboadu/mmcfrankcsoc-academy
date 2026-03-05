import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginAdmin } from '../api'
import './AdminLogin.css'

function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await loginAdmin(formData)
      localStorage.setItem('adminToken', data.token)
      localStorage.setItem('adminInfo', JSON.stringify(data.admin))
      navigate('/dashboard')
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="admin-login">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <span className="admin-symbol">⊕</span>
          <h2>Admin Login</h2>
          <p>MmcfraNkcsoc Academy</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@mmcfrankcsoc.org"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login ⊕'}
          </button>
        </form>

        <p className="login-back">
          <a href="/">← Back to Website</a>
        </p>
      </div>
    </main>
  )
}

export default AdminLogin