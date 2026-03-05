import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { getAllMembers, updateMemberStatus } from '../api'
import './Members.css'

function Members() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [selectedMember, setSelectedMember] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('adminToken')) {
      navigate('/admin')
      return
    }
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const { data } = await getAllMembers()
      setMembers(data)
    } catch (error) {
      console.log('Error fetching members:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatus = async (id, status) => {
    try {
      await updateMemberStatus(id, status)
      fetchMembers()
      setSelectedMember(null)
    } catch (error) {
      console.log('Error updating status:', error)
    }
  }

  const filteredMembers = members.filter(m => {
    if (filter === 'all') return true
    return m.status === filter
  })

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
          <Link to="/dashboard/members" className="sidebar-link active">
            👥 Members
          </Link>
          <Link to="/dashboard/blog" className="sidebar-link">
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
          <h1>Members</h1>
          <p>Manage member applications and approved members</p>
        </div>

        {/* FILTER TABS */}
        <div className="filter-tabs">
          <button
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({members.length})
          </button>
          <button
            className={`filter-tab ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending ({members.filter(m => m.status === 'pending').length})
          </button>
          <button
            className={`filter-tab ${filter === 'approved' ? 'active' : ''}`}
            onClick={() => setFilter('approved')}
          >
            Approved ({members.filter(m => m.status === 'approved').length})
          </button>
          <button
            className={`filter-tab ${filter === 'rejected' ? 'active' : ''}`}
            onClick={() => setFilter('rejected')}
          >
            Rejected ({members.filter(m => m.status === 'rejected').length})
          </button>
        </div>

        {loading ? (
          <div className="dashboard-loading">
            <span>⊕</span>
            <p>Loading members...</p>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="no-data">
            <span>👥</span>
            <p>No members found</p>
          </div>
        ) : (
          <div className="members-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Region</th>
                  <th>Applied</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map(member => (
                  <tr key={member._id}>
                    <td>{member.fullName}</td>
                    <td>{member.email}</td>
                    <td>{member.region}</td>
                    <td>{new Date(member.appliedAt).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-badge ${member.status}`}>
                        {member.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button
                          className="view-btn"
                          onClick={() => setSelectedMember(member)}
                        >
                          View
                        </button>
                        {member.status === 'pending' && (
                          <>
                            <button
                              className="approve-btn"
                              onClick={() => handleStatus(member._id, 'approved')}
                            >
                              Approve
                            </button>
                            <button
                              className="reject-btn"
                              onClick={() => handleStatus(member._id, 'rejected')}
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* MEMBER DETAIL MODAL */}
        {selectedMember && (
          <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedMember.fullName}</h2>
                <button onClick={() => setSelectedMember(null)}>✕</button>
              </div>
              <div className="modal-body">
                <div className="modal-row">
                  <span>Email:</span>
                  <p>{selectedMember.email}</p>
                </div>
                <div className="modal-row">
                  <span>Age:</span>
                  <p>{selectedMember.age}</p>
                </div>
                <div className="modal-row">
                  <span>Gender:</span>
                  <p>{selectedMember.gender}</p>
                </div>
                <div className="modal-row">
                  <span>Phone:</span>
                  <p>{selectedMember.phone}</p>
                </div>
                <div className="modal-row">
                  <span>Region:</span>
                  <p>{selectedMember.region}</p>
                </div>
                <div className="modal-row">
                  <span>Occupation:</span>
                  <p>{selectedMember.occupation}</p>
                </div>
                <div className="modal-row">
                  <span>Skills:</span>
                  <p>{selectedMember.skills.join(', ') || 'None specified'}</p>
                </div>
                <div className="modal-row">
                  <span>Why Joining:</span>
                  <p>{selectedMember.whyJoining}</p>
                </div>
                <div className="modal-row">
                  <span>Heard From:</span>
                  <p>{selectedMember.heardFrom || 'Not specified'}</p>
                </div>
                <div className="modal-row">
                  <span>Status:</span>
                  <p><span className={`status-badge ${selectedMember.status}`}>{selectedMember.status}</span></p>
                </div>
              </div>
              {selectedMember.status === 'pending' && (
                <div className="modal-footer">
                  <button
                    className="approve-btn"
                    onClick={() => handleStatus(selectedMember._id, 'approved')}
                  >
                    Approve Member
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => handleStatus(selectedMember._id, 'rejected')}
                  >
                    Reject Member
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Members