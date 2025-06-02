import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
              <img
                src="http://puredigits.us/wp-content/uploads/2024/07/puredigits-1.png"
                alt="Pure Digits Inc."
                style={{
                  height: '40px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-icon" style={{ width: '32px', height: '32px', fontSize: '14px', display: 'none' }}>PD</div>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>Pure Digits Inc.</span>
            </div>
            <p>
              Empowering businesses with AI-driven CRM/ERP solutions, mobile applications,
              and cutting-edge technology that delivers results faster and more cost-effectively.
            </p>
            <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '1rem' }}>
              🌐 PureDigits.Us
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#" style={{ color: '#9ca3af', fontSize: '20px' }}>📧</a>
              <a href="#" style={{ color: '#9ca3af', fontSize: '20px' }}>📱</a>
              <a href="#" style={{ color: '#9ca3af', fontSize: '20px' }}>🌐</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/services">Our Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <p>CRM/ERP Development</p>
            <p>AI Integration</p>
            <p>Mobile App Development</p>
            <p>Custom Solutions</p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📧 service@puredigits.us</p>
            <p>📞 (202) 823-9437</p>
            <p>📍 427 Christopher Ave<br />Gaithersburg, MD</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Pure Digits Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
