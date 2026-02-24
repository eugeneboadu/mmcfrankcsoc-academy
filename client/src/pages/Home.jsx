import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-symbol">⊕</div>
          <h1>Empowering Rural Communities Through <span>AI & Technology</span></h1>
          <p>
            MmcfraNkcsoc Academy brings hands-on AI and IT education to children 
            in less-endowed communities across Ghana. We believe every child 
            deserves access to the tools of the future.
          </p>
          <div className="hero-buttons">
            <Link to="/join" className="btn-primary">Join Our Mission</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <span className="hero-card-symbol">⊕</span>
            <p className="hero-card-text">Nyansapo</p>
            <p className="hero-card-sub">Wisdom Knot</p>
            <p className="hero-card-meaning">
              "It takes wisdom, ingenuity, and patience to conquer a difficult task"
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="impact">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-card">
              <h2>3</h2>
              <p>School Visited</p>
            </div>
            <div className="impact-card">
              <h2>100+</h2>
              <p>Children Reached</p>
            </div>
            <div className="impact-card">
              <h2>Growing</h2>
              <p>Member Community</p>
            </div>
            <div className="impact-card">
              <h2>2025</h2>
              <p>Year Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-we-are">
        <div className="container">
          <div className="who-grid">
            <div className="who-text">
              <span className="section-label">Who We Are</span>
              <h2>Young People Creating Real Change</h2>
              <p>
                MmcfraNkcsoc Academy was founded by a group of passionate young 
                people who believe that geography should never determine a child's 
                access to quality technology education.
              </p>
              <p>
                We travel to rural and less-endowed schools across Ghana, bringing 
                practical AI and IT lessons that open minds and create possibilities. 
                Our volunteers are students, developers, and educators united by one goal.
              </p>
              <Link to="/about" className="btn-primary">Our Full Story</Link>
            </div>
            <div className="who-visual">
              <div className="who-card">
                <div className="who-card-item">
                  <span>🎯</span>
                  <div>
                    <h4>Our Mission</h4>
                    <p>Bring AI and IT education to every rural child in Ghana</p>
                  </div>
                </div>
                <div className="who-card-item">
                  <span>👁️</span>
                  <div>
                    <h4>Our Vision</h4>
                    <p>A Ghana where no child is left behind in the digital age</p>
                  </div>
                </div>
                <div className="who-card-item">
                  <span>💛</span>
                  <div>
                    <h4>Our Values</h4>
                    <p>Community, wisdom, inclusion, and hands-on learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="what-we-do">
        <div className="container">
          <span className="section-label">What We Do</span>
          <h2>How We Make An Impact</h2>
          <div className="what-grid">
            <div className="what-card">
              <span className="what-icon">🤖</span>
              <h3>AI Education</h3>
              <p>We introduce children to artificial intelligence concepts in simple, 
              engaging ways that spark curiosity and critical thinking.</p>
            </div>
            <div className="what-card">
              <span className="what-icon">💻</span>
              <h3>IT Skills</h3>
              <p>From basic computer literacy to coding fundamentals, we equip 
              students with practical digital skills for the modern world.</p>
            </div>
            <div className="what-card">
              <span className="what-icon">🏫</span>
              <h3>School Visits</h3>
              <p>We go directly to rural and less-endowed schools, removing 
              barriers and bringing education to where it's needed most.</p>
            </div>
            <div className="what-card">
              <span className="what-icon">🤝</span>
              <h3>Community Building</h3>
              <p>We build a network of passionate volunteers and educators 
              committed to bridging the digital divide in Ghana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="cta-symbol">⊕</span>
            <h2>Ready To Make A Difference?</h2>
            <p>
              Join MmcfraNkcsoc Academy and help us bring the gift of technology 
              education to children who need it most. Every skill you have matters.
            </p>
            <div className="cta-buttons">
              <Link to="/join" className="btn-primary">Become A Member</Link>
              <Link to="/stories" className="btn-outline">Read Field Stories</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home