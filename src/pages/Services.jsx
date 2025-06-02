import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: "Custom CRM/ERP Development",
      description: "Built from scratch to perfectly fit your business processes, not the other way around.",
      features: [
        "100% Custom Architecture",
        "AI-Powered Automation",
        "Seamless Integration",
        "Scalable Design",
        "No Licensing Fees"
      ],
      benefits: [
        "50% cost savings vs Salesforce",
        "3-5x faster implementation",
        "Perfect business fit",
        "No ongoing update burden"
      ]
    },
    {
      title: "AI Integration & Applications",
      description: "Transform your business with intelligent automation and data-driven insights.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Predictive Analytics",
        "Intelligent Automation",
        "Custom AI Solutions"
      ],
      benefits: [
        "Automated decision making",
        "Improved efficiency",
        "Data-driven insights",
        "Competitive advantage"
      ]
    },
    {
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile solutions that engage your customers and employees.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "Backend Integration",
        "App Store Deployment"
      ],
      benefits: [
        "Reach mobile customers",
        "Improve user engagement",
        "Streamline operations",
        "Modern user experience"
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h1>Our <span className="highlight">Services</span></h1>
            <p style={{ fontSize: '1.25rem' }}>
              Custom technology solutions built faster, smarter, and more cost-effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '4rem' }}>
            {services.map((service, index) => (
              <div key={index} className="service-card services-page-card">
                <div className="service-header">
                  <div className="service-icon">⚙️</div>
                  <h2>{service.title}</h2>
                  <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>{service.description}</p>
                </div>

                <div className="service-content">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                      <h3>Key Features:</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3>Benefits:</h3>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ color: '#3b82f6', marginRight: '0.5rem' }}>•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section light-bg-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: '#1f2937' }}>Why Choose Our Approach?</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '500px', margin: '0 auto', color: '#4b5563' }}>
              Built exactly for your business. No compromises.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Save 50% compared to traditional platforms like Salesforce</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Rapid Development</h3>
              <p>AI-accelerated development process delivers results 3-5x faster</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Perfect Fit</h3>
              <p>Custom-built solutions that match your exact business requirements</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Future-Proof</h3>
              <p>No vendor lock-in, no licensing headaches, complete ownership</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
