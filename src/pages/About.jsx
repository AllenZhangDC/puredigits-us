import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>About <span className="highlight">Pure Digits</span></h1>
              <p>
                We're a technology company that believes business software should work for you,
                not against you. That's why we build custom solutions that fit your exact needs,
                powered by AI, and delivered faster and more cost-effectively than ever before.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Work With Us
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <h3>Our Mission</h3>
              <p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                To democratize access to high-quality, custom business software by leveraging
                AI to make development faster, more affordable, and perfectly tailored to each
                client's unique needs.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#3b82f6' }}>📈</span>
                  <span>Faster Development</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#3b82f6' }}>👥</span>
                  <span>Better User Experience</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#3b82f6' }}>🧠</span>
                  <span>AI-Powered Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Our Core Values</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              These principles guide everything we do and ensure we deliver
              exceptional value to every client we work with.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Rapid Innovation</h3>
              <p>We leverage AI to accelerate development and deliver solutions 3-5x faster than traditional methods.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI-First Approach</h3>
              <p>Every solution we build incorporates intelligent automation and data-driven insights from the ground up.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Customer-Centric</h3>
              <p>We build exactly what you need, not what we think you should have. Your success is our success.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Creative Solutions</h3>
              <p>We think outside the box to solve complex business challenges with innovative technology approaches.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Partnership Mindset</h3>
              <p>We're not just vendors - we're your technology partners committed to your long-term success.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Quality & Security</h3>
              <p>We maintain the highest standards of code quality, security, and reliability in everything we build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Our Track Record</h2>
            <p style={{ fontSize: '1.25rem', color: '#bfdbfe' }}>
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <h3>100%</h3>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Client Satisfaction</h4>
              <p>Every project delivered successfully</p>
            </div>
            <div className="stat-item">
              <h3>3-5x</h3>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Faster Development</h4>
              <p>AI-accelerated development process</p>
            </div>
            <div className="stat-item">
              <h3>50%</h3>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Cost Savings</h4>
              <p>Compared to traditional platforms</p>
            </div>
            <div className="stat-item">
              <h3>0</h3>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Vendor Lock-in</h4>
              <p>Complete ownership of your solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: '#1f2937' }}>The Pure Digits Advantage</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: '#4b5563' }}>
              Why businesses choose us over traditional software vendors and platforms.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h3 style={{ color: '#1f2937' }}>No Vendor Lock-in</h3>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: '#dbeafe',
                  color: '#1d4ed8',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  Complete Control
                </span>
              </div>
              <p style={{ color: '#4b5563' }}>You own your solution completely. No ongoing licensing fees or dependency on third-party platforms.</p>
            </div>
            <div className="feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h3 style={{ color: '#1f2937' }}>Perfect Business Fit</h3>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: '#dbeafe',
                  color: '#1d4ed8',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  100% Tailored
                </span>
              </div>
              <p style={{ color: '#4b5563' }}>Custom-built from scratch to match your exact processes, not forced to adapt to generic software.</p>
            </div>
            <div className="feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h3 style={{ color: '#1f2937' }}>Cost Effective</h3>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: '#dbeafe',
                  color: '#1d4ed8',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  Significant Savings
                </span>
              </div>
              <p style={{ color: '#4b5563' }}>Save 50% compared to traditional platforms like Salesforce while getting exactly what you need.</p>
            </div>
            <div className="feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h3 style={{ color: '#1f2937' }}>Future-Proof</h3>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: '#dbeafe',
                  color: '#1d4ed8',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  Long-term Value
                </span>
              </div>
              <p style={{ color: '#4b5563' }}>Built with modern architecture and AI integration that grows and evolves with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#1f2937', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>
              Ready to Experience the Difference?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Let's discuss how we can build a custom solution that perfectly fits
              your business needs and delivers exceptional value.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get Started Today →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
