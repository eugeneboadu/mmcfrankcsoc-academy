import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPublishedPosts } from '../api'
import './Stories.css'

function Stories() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getPublishedPosts()
        setPosts(data)
      } catch (error) {
        console.log('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <main className="stories">

      <section className="stories-hero">
        <div className="container">
          <span className="section-label">Field Stories</span>
          <h1>From The <span>Ground</span></h1>
          <p>
            Real stories from real school visits. Every post here represents
            a moment where technology education reached a child who needed it.
          </p>
        </div>
      </section>

      <section className="stories-grid-section">
        <div className="container">
          {loading ? (
            <div className="stories-loading">
              <span>⊕</span>
              <p>Loading stories...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="no-stories">
              <span>⊕</span>
              <h2>Stories Coming Soon</h2>
              <p>We are out in the field right now. Check back soon for updates from our school visits.</p>
            </div>
          ) : (
            <div className="stories-grid">
              {posts.map(post => (
                <div className="story-card" key={post._id}>
                  <div className="story-card-image">
                    {post.photoUrl ? (
                      <img src={post.photoUrl} alt={post.title} />
                    ) : (
                      <span className="story-symbol">⊕</span>
                    )}
                  </div>
                  <div className="story-card-body">
                    <div className="story-meta">
                      <span className="story-tag">{post.location}</span>
                      <span className="story-date">
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p className="story-location">📍 {post.location}</p>
                    <p className="story-excerpt">{post.content.substring(0, 150)}...</p>
                    <Link to={`/stories/${post._id}`} className="story-read-more">
                      Read Full Story →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="stories-cta">
        <div className="container">
          <div className="cta-box">
            <span className="cta-symbol">⊕</span>
            <h2>Want To Be Part Of The Next Story?</h2>
            <p>Join our team and help us create more moments like these in communities across Ghana.</p>
            <div className="cta-buttons">
              <Link to="/join" className="btn-primary">Join The Team</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Stories