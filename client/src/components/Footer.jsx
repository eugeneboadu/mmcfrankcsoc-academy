import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <span className="footer-symbol">⊕</span>
          <h3>MmcfraNkcsoc Academy</h3>
          <p>Empowering rural communities through AI and IT education. One school at a time.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/stories">Field Stories</Link></li>
            <li><Link to="/join">Join Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get Involved</h4>
          <p>Are you passionate about education and technology?</p>
          <Link to="/join" className="footer-cta">Join Our Team</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MmcfraNkcsoc Academy. Built with purpose.</p>
        <p className="footer-symbol-text">⊕ Nyansapo — Wisdom Knot</p>
      </div>
    </footer>
  )
}

export default Footer