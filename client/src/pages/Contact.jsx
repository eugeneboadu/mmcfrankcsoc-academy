import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="contact">
        <section className="success-section">
          <div className="container">
            <div className="success-card">
              <span className="success-symbol">⊕</span>
              <h2>Message Sent!</h2>
              <p>
                Thank you for reaching out to MmcfraNkcsoc Academy. 
                We will get back to you as soon as possible.
              </p>
              <a href="/" className="btn-primary">Back To Home</a>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="contact">

      {/* PAGE HERO */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Contact Us</span>
          <h1>Let's <span>Talk</span></h1>
          <p>
            Have a question, suggestion, or want to partner with us? 
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-layout">

            {/* CONTACT INFO */}
            <div className="contact-info">
              <h3>Get In Touch</h3>

              <div className="contact-item">
                <span>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Kumasi, Ashanti Region, Ghana</p>
                </div>
              </div>

              <div className="contact-item">
                <span>✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>info@mmcfrankcsoc.org</p>
                </div>
              </div>

              <div className="contact-item">
                <span>🌍</span>
                <div>
                  <h4>We Operate In</h4>
                  <p>Rural and less-endowed communities across Ghana</p>
                </div>
              </div>

              <div className="contact-item">
                <span>⊕</span>
                <div>
                  <h4>Our Symbol</h4>
                  <p>Nyansapo — Wisdom Knot. We lead with wisdom in everything.</p>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Our Journey</h4>
                <div className="social-grid">
                  <a href="#" className="social-btn">Twitter / X</a>
                  <a href="#" className="social-btn">Instagram</a>
                  <a href="#" className="social-btn">LinkedIn</a>
                  <a href="#" className="social-btn">Facebook</a>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-card">
              <h3>Send Us A Message</h3>
              <p className="form-subtitle">We typically respond within 48 hours</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows="6"
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message ⊕
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Contact