import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      title: "Cost Effective",
      description: "50% savings compared to Salesforce and traditional platforms, making it affordable for SMEs"
    },
    {
      title: "Rapid Delivery",
      description: "AI-accelerated development delivers in weeks what traditionally takes months"
    },
    {
      title: "Fully Customized",
      description: "100% tailored to your business processes and requirements, no compromises"
    }
  ]

  const services = [
    {
      title: "Intelligent Business Systems",
      description: "AI-native CRM/ERP platforms that think, learn, and optimize your operations autonomously"
    },
    {
      title: "Cognitive Automation",
      description: "Deploy machine intelligence that handles complex decisions, predictions, and workflows seamlessly"
    },
    {
      title: "Next-Gen Applications",
      description: "Mobile and web experiences that anticipate user needs and deliver personalized interactions"
    }
  ]

  const stats = [
    { number: "50%", label: "Cost Reduction", description: "Compared to traditional enterprise solutions" },
    { number: "500%", label: "Speed Increase", description: "AI-accelerated development velocity" },
    { number: "∞", label: "Scalability", description: "Unlimited growth potential built-in" },
    { number: "0", label: "Vendor Lock-in", description: "Complete ownership and freedom" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Every SME Deserves Their Own <span className="highlight">Custom AI-CRM System</span>
              </h1>
              <p>
                Tailored AI-CRM solutions with 50% cost savings and 5x faster development, bringing enterprise-level intelligent systems within reach of every small and medium business.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Get Your Custom Solution
                </Link>
                <Link to="/case-studies" className="btn btn-secondary">
                  View Success Stories
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <h3 style={{ color: '#ffffff', fontWeight: '700' }}>Success Stories</h3>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', color: 'white' }}>✓</div>
                  <div>
                    <h4 style={{ margin: 0, color: '#ffffff', fontWeight: '600' }}>Printing Company</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#e2e8f0' }}>CRM/ERP Implementation Complete</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', color: 'white' }}>✓</div>
                  <div>
                    <h4 style={{ margin: 0, color: '#ffffff', fontWeight: '600' }}>Clothing Manufacturer</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#e2e8f0' }}>Custom CRM System Deployed</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: '#8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', color: 'white' }}>✓</div>
                  <div>
                    <h4 style={{ margin: 0, color: '#ffffff', fontWeight: '600' }}>Medical Clinic Chain</h4>
                    <p style={{ margin: 0, fontSize: '14px', color: '#e2e8f0' }}>TCM System Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Why Choose Pure Digits?</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
              AI-CRM solutions designed specifically for SMEs, making custom systems accessible and affordable.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {index === 0 ? '⚡' : index === 1 ? '🧠' : '🎯'}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{stat.label}</h4>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: '#1f2937' }}>Intelligent Solutions Portfolio</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: '#4b5563' }}>
              Transform your entire business ecosystem with our suite of AI-powered solutions.
              Each system learns, adapts, and evolves to maximize your competitive advantage.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    {index === 0 ? '🤖' : index === 1 ? '🔮' : '🚀'}
                  </div>
                  <h3 style={{ color: '#ffffff', fontWeight: '700' }}>{service.title}</h3>
                </div>
                <div className="service-content">
                  <p style={{ color: '#e2e8f0' }}>{service.description}</p>
                  <div style={{ marginTop: 'auto' }}>
                    <Link to="/services" className="btn btn-primary">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#1f2937', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>
              Ready to Enter the Future?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Don't just adapt to change—lead it. Join visionary companies who've already transformed
              their industries with our intelligent business solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/case-studies" className="btn btn-secondary" style={{ background: 'transparent', borderColor: 'white', color: 'white' }}>
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
