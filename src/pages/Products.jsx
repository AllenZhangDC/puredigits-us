import { Link } from 'react-router-dom'

const Products = () => {
  const products = [
    {
      name: "TCM SAAS Platform",
      category: "Healthcare Technology",
      description: "AI-powered Traditional Chinese Medicine management system designed for modern healthcare practices.",
      features: [
        "Patient Management System",
        "Herb Inventory Tracking",
        "Treatment Protocol Management",
        "AI-Assisted Diagnosis Support",
        "Multi-location Synchronization",
        "Appointment Scheduling"
      ],
      targetAudience: "TCM Clinics, Healthcare Practitioners, Medical Centers",
      benefits: [
        "Streamlined patient care",
        "Improved treatment accuracy",
        "Reduced administrative burden",
        "Enhanced practice efficiency"
      ],
      status: "Available",
      icon: "🩺"
    },
    {
      name: "ProPaths.us",
      category: "Educational Platform",
      description: "A public benefit platform connecting middle and high school students with career guidance and educational pathways.",
      features: [
        "Career Assessment Tools",
        "Educational Pathway Mapping",
        "Mentor Matching System",
        "Scholarship Database",
        "College Application Support",
        "Community Forums"
      ],
      targetAudience: "Students, Parents, Educators, Career Counselors",
      benefits: [
        "Clear career direction",
        "Educational planning support",
        "Mentorship opportunities",
        "Scholarship access"
      ],
      status: "Public Benefit",
      icon: "🎓"
    },
    {
      name: "Health Consultation Platform",
      category: "Telemedicine",
      description: "Comprehensive health consultation platform connecting patients with healthcare professionals for remote consultations.",
      features: [
        "Video Consultation System",
        "Appointment Scheduling",
        "Medical Record Management",
        "Prescription Management",
        "Health Monitoring Tools",
        "Multi-language Support"
      ],
      targetAudience: "Patients, Doctors, Healthcare Providers",
      benefits: [
        "Accessible healthcare",
        "Convenient consultations",
        "Comprehensive health tracking",
        "Professional medical advice"
      ],
      status: "Available",
      icon: "❤️"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Our <span className="highlight">Products</span></h1>
            <p style={{ fontSize: '1.25rem' }}>
              AI-powered platforms that showcase our expertise across healthcare, education, and telemedicine.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '2rem' }}>
            {products.map((product, index) => (
              <div key={index} className="service-card product-card">
                {/* Product Header */}
                <div className="service-header" style={{ background: '#f0f9ff' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '3rem' }}>{product.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <h2 style={{ margin: 0 }}>{product.name}</h2>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          background: product.status === 'Public Benefit' ? '#dbeafe' : '#dcfce7',
                          color: product.status === 'Public Benefit' ? '#1d4ed8' : '#166534'
                        }}>
                          {product.status}
                        </span>
                      </div>
                      <p style={{ color: '#666', margin: 0, fontWeight: '500' }}>{product.category}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{product.description}</p>
                </div>

                {/* Product Features */}
                <div className="service-content">
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start' }}>
                    <div>
                      <h3 style={{ marginBottom: '1rem' }}>Key Features</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            fontSize: '0.9rem'
                          }}>
                            <div style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%', flexShrink: 0 }}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                        Learn More →
                      </Link>
                      {product.name === "TCM SAAS Platform" && (
                        <a
                          href="https://us-tcm.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                        >
                          Visit Platform 🌐
                        </a>
                      )}
                      {product.name === "ProPaths.us" && (
                        <a
                          href="https://propaths.us"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                        >
                          Visit Platform 🌐
                        </a>
                      )}
                      {product.name === "Health Consultation Platform" && (
                        <a
                          href="https://qihuang.online"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
                        >
                          Visit Platform 🌐
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

export default Products
