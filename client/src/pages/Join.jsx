import { useState } from 'react'
import { registerMember } from '../api'
import './Join.css'

function Join() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    region: '',
    occupation: '',
    skills: [],
    whyJoining: '',
    heardFrom: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const skillOptions = [
    'Teaching',
    'Programming',
    'Design',
    'Communication',
    'Photography',
    'Social Media',
    'Other'
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSkillChange = (skill) => {
    const updated = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill]
    setFormData({ ...formData, skills: updated })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await registerMember(formData)
      setSubmitted(true)
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main className="join">
        <section className="success-section">
          <div className="container">
            <div className="success-card">
              <span className="success-symbol">⊕</span>
              <h2>Application Received!</h2>
              <p>
                Thank you for applying to join MmcfraNkcsoc Academy. 
                We have received your application and will review it shortly. 
                You will be contacted via email once a decision has been made.
              </p>
              <p className="success-sub">
                While you wait, feel free to read our field stories and learn more about our work.
              </p>
              <a href="/stories" className="btn-primary">Read Field Stories</a>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="join">

      {/* PAGE HERO */}
      <section className="join-hero">
        <div className="container">
          <span className="section-label">Join Us</span>
          <h1>Become Part Of <span>Something Meaningful</span></h1>
          <p>
            Fill in the form below to apply for membership. 
            Every skill matters. Every person counts.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="form-section">
        <div className="container">
          <div className="form-layout">

            {/* SIDE INFO */}
            <div className="form-info">
              <h3>Why Join Us?</h3>
              <div className="form-info-item">
                <span>🌍</span>
                <div>
                  <h4>Real Impact</h4>
                  <p>Your work directly reaches children in rural communities who need it most.</p>
                </div>
              </div>
              <div className="form-info-item">
                <span>🧠</span>
                <div>
                  <h4>Grow Your Skills</h4>
                  <p>Teaching others is the fastest way to deepen your own knowledge.</p>
                </div>
              </div>
              <div className="form-info-item">
                <span>👥</span>
                <div>
                  <h4>Join A Community</h4>
                  <p>Connect with passionate people who share your values and drive.</p>
                </div>
              </div>
              <div className="form-info-item">
                <span>⊕</span>
                <div>
                  <h4>Carry The Symbol</h4>
                  <p>Represent the Nyansapo — wisdom, ingenuity, and purpose in action.</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="form-card">
              <h3>Membership Application</h3>
              <p className="form-subtitle">All fields marked * are required</p>

              <form onSubmit={handleSubmit}>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Age *</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Your age"
                      min="16"
                      max="60"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Gender *</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
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

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Region / Location *</label>
                    <input
                      type="text"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      placeholder="e.g. Ashanti Region"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Occupation / Student Status *</label>
                  <select name="occupation" value={formData.occupation} onChange={handleChange} required>
                    <option value="">Select one</option>
                    <option value="student">Student</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Skills You Can Contribute</label>
                  <div className="skills-grid">
                    {skillOptions.map(skill => (
                      <label key={skill} className="skill-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.skills.includes(skill)}
                          onChange={() => handleSkillChange(skill)}
                        />
                        <span>{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Why Do You Want To Join? *</label>
                  <textarea
                    name="whyJoining"
                    value={formData.whyJoining}
                    onChange={handleChange}
                    placeholder="Tell us what drives you and what you hope to contribute..."
                    rows="5"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>How Did You Hear About Us?</label>
                  <select name="heardFrom" value={formData.heardFrom} onChange={handleChange}>
                    <option value="">Select one</option>
                    <option value="friend">From a Friend</option>
                    <option value="social-media">Social Media</option>
                    <option value="school">Through School</option>
                    <option value="event">At an Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Application ⊕'}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Join