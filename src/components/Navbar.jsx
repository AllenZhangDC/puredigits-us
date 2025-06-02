import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="http://puredigits.us/wp-content/uploads/2024/07/puredigits-1.png"
              alt="Pure Digits Inc."
              style={{
                height: '50px',
                width: 'auto',
                filter: 'brightness(0) invert(1)',
                transition: 'all 0.3s ease'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-icon" style={{ display: 'none' }}>PD</div>
            <span className="logo-text">Pure Digits Inc.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className={`nav-menu ${isOpen ? 'mobile-open' : ''}`}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => {
                    setIsOpen(false)
                    // Scroll to top when navigating
                    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => {
                  setIsOpen(false)
                  // Scroll to top when navigating
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
              >
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
