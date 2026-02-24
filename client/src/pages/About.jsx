import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <main className="about">

      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="container">
          <span className="section-label">Who We Are</span>
          <h1>We Are <span>MmcfraNkcsoc Academy</span></h1>
          <p>
            A group of passionate young people on a mission to bridge the digital 
            divide in rural Ghana — one school, one child, one lesson at a time.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-label">Our Story</span>
              <h2>How It All Began</h2>
              <p>
                MmcfraNkcsoc Academy was born from a simple but powerful observation — 
                children in rural and less-endowed communities across Ghana had little 
                to no access to technology education, while the world was rapidly 
                moving into the age of artificial intelligence.
              </p>
              <p>
                A group of young mates decided that was unacceptable. We didn't wait 
                for someone else to solve the problem. We packed our knowledge, our 
                passion, and our laptops, and we went to where the children were.
              </p>
              <p>
                What started as visits to schools in our community has grown into 
                a structured NGO with a clear mission — and we are just getting started.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-symbol-card">
                <span className="big-symbol">⊕</span>
                <h3>Nyansapo</h3>
                <p className="symbol-meaning">Wisdom Knot</p>
                <p className="symbol-desc">
                  We chose the Nyansapo — the Adinkra wisdom knot — as our symbol 
                  because it represents the wisdom, ingenuity, and patience required 
                  to overcome difficult challenges. That is exactly what we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="mvv">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card mission">
              <span className="mvv-icon">🎯</span>
              <h3>Our Mission</h3>
              <p>
                To bring hands-on AI and IT education to children in rural and 
                less-endowed communities across Ghana, creating equal opportunities 
                in the digital age.
              </p>
            </div>
            <div className="mvv-card vision">
              <span className="mvv-icon">👁️</span>
              <h3>Our Vision</h3>
              <p>
                A Ghana where every child — regardless of location or background — 
                has access to quality technology education and the opportunity to 
                thrive in a digital world.
              </p>
            </div>
            <div className="mvv-card values">
              <span className="mvv-icon">💛</span>
              <h3>Our Values</h3>
              <p>
                Community first. Wisdom in action. Radical inclusion. Hands-on 
                learning. Integrity in everything we do. These are the principles 
                that guide every school visit and every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="different">
        <div className="container">
          <span className="section-label">Why We Are Different</span>
          <h2>We Go To Them</h2>
          <p className="different-intro">
            Most technology education initiatives wait for students to come to them. 
            We believe that is the wrong approach. We go directly to the schools, 
            the communities, and the children who need us most.
          </p>
          <div className="different-grid">
            <div className="different-card">
              <span>📍</span>
              <h4>We Go To Rural Areas</h4>
              <p>We travel to less-endowed communities that are often overlooked by mainstream education initiatives.</p>
            </div>
            <div className="different-card">
              <span>🧠</span>
              <h4>Practical Learning</h4>
              <p>No textbook theory. We teach through hands-on activities that children can relate to and remember.</p>
            </div>
            <div className="different-card">
              <span>🆓</span>
              <h4>Completely Free</h4>
              <p>Every session we run is completely free for the schools and students we serve. No barriers.</p>
            </div>
            <div className="different-card">
              <span>👥</span>
              <h4>Peer To Peer</h4>
              <p>Our volunteers are young people themselves. Children connect better with educators close to their age.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-box">
            <span className="cta-symbol">⊕</span>
            <h2>Be Part Of This Story</h2>
            <p>
              We are always looking for passionate people to join our mission. 
              Whether you are a developer, teacher, designer, or simply someone 
              who cares — there is a place for you here.
            </p>
            <div className="cta-buttons">
              <Link to="/join" className="btn-primary">Join MmcfraNkcsoc Academy</Link>
              <Link to="/stories" className="btn-outline">Read Our Field Stories</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About