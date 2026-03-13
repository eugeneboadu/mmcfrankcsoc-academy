import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPublishedPosts } from '../api'
import './StoryDetail.css'

function StoryDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPublishedPosts()
        const found = data.find(p => p._id === id)
        setPost(found)
      } catch (error) {
        console.log('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [id])

  if (loading) {
    return (
      <main className="story-detail">
        <div className="story-detail-loading">
          <span>⊕</span>
          <p>Loading story...</p>
        </div>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="story-detail">
        <div className="story-detail-loading">
          <span>⊕</span>
          <p>Story not found.</p>
          <Link to="/stories" className="btn-primary">Back To Stories</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="story-detail">

      {/* HERO */}
      <section className="story-detail-hero">
        {post.photoUrl ? (
          <div className="story-detail-image">
            <img src={post.photoUrl} alt={post.title} />
            <div className="story-detail-overlay" />
          </div>
        ) : (
          <div className="story-detail-no-image">
            <span>⊕</span>
          </div>
        )}
        <div className="story-detail-hero-content">
          <Link to="/stories" className="back-link">← Back To Stories</Link>
          <div className="story-detail-meta">
            <span className="story-tag">{post.location}</span>
            <span className="story-date">
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <h1>{post.title}</h1>
          <p className="story-detail-location">📍 {post.location}</p>
          <p className="story-detail-author">✍️ By {post.author}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="story-detail-content">
        <div className="container">
          <div className="story-detail-body">
            {post.content.split('\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="story-detail-footer">
            <div className="story-detail-symbol">
              <span>⊕</span>
              <p>Nyansapo — Wisdom Knot</p>
            </div>
            <Link to="/stories" className="btn-primary">
              ← Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="story-cta">
        <div className="container">
          <div className="cta-box">
            <span className="cta-symbol">⊕</span>
            <h2>Want To Be Part Of The Next Story?</h2>
            <p>Join our team and help us create more moments like these.</p>
            <div className="cta-buttons">
              <Link to="/join" className="btn-primary">Join The Team</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default StoryDetail