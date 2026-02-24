import { Link } from 'react-router-dom'
import './Stories.css'

const sampleStories = [
  {
    id: 1,
    title: "Introducing AI To Students At Kumasi",
    location: "Kumasi, Ashanti Region",
    date: "February 2026",
    excerpt: "We visited our first school and introduced over 30 students to the basics of artificial intelligence. The excitement on their faces was unforgettable.",
    tag: "AI Education"
  },
  {
    id: 2,
    title: "Teaching Basic Computer Skills",
    location: "Kumasi, Ashanti Region",
    date: "February 2026",
    excerpt: "Many of the students had never touched a computer before. Watching them type their first words and navigate a screen for the first time was a powerful moment.",
    tag: "IT Skills"
  },
  {
    id: 3,
    title: "Our Third School Visit — Growing Impact",
    location: "Kumasi, Ashanti Region",
    date: "February 2026",
    excerpt: "By our third visit we had refined our approach and the sessions were more interactive than ever. Students asked questions that surprised even us.",
    tag: "Community"
  }
]

function Stories() {
  return (
    <main className="stories">

      {/* PAGE HERO */}
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

      {/* STORIES GRID */}
      <section className="stories-grid-section">
        <div className="container">
          <div className="stories-grid">
            {sampleStories.map(story => (
              <div className="story-card" key={story.id}>
                <div className="story-card-image">
                  <span className="story-symbol">⊕</span>
                </div>
                <div className="story-card-body">
                  <div className="story-meta">
                    <span className="story-tag">{story.tag}</span>
                    <span className="story-date">{story.date}</span>
                  </div>
                  <h3>{story.title}</h3>
                  <p className="story-location">📍 {story.location}</p>
                  <p className="story-excerpt">{story.excerpt}</p>
                  <Link to={`/stories/${story.id}`} className="story-read-more">
                    Read Full Story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPTY STATE — shown when no stories */}
      {sampleStories.length === 0 && (
        <section className="no-stories">
          <div className="container">
            <span>⊕</span>
            <h2>Stories Coming Soon</h2>
            <p>We are out in the field right now. Check back soon for updates from our school visits.</p>
          </div>
        </section>
      )}

      {/* CTA */}
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