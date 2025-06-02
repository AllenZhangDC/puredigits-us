import { Link } from 'react-router-dom'

const CaseStudies = () => {
  const cases = [
    {
      company: "Industrial Printing Company",
      industry: "Manufacturing",
      challenge: "Manual order processing, inventory tracking issues, and disconnected systems leading to delays and errors.",
      solution: "Custom CRM/ERP system with AI-powered inventory management, automated order processing, and real-time production tracking.",
      results: [
        { metric: "Order Processing Time", improvement: "75% Reduction" },
        { metric: "Inventory Accuracy", improvement: "98% Accuracy" },
        { metric: "Operational Costs", improvement: "40% Savings" },
        { metric: "Customer Satisfaction", improvement: "95% Rating" }
      ],
      technologies: ["Custom CRM/ERP", "AI Inventory Management", "Real-time Analytics", "Mobile App"],
      icon: "🖨️"
    },
    {
      company: "Fashion Manufacturing Company",
      industry: "Apparel",
      challenge: "Complex supply chain management, seasonal demand forecasting, and customer relationship management across multiple channels.",
      solution: "AI-enhanced CRM system with predictive analytics for demand forecasting, supplier management, and multi-channel customer engagement.",
      results: [
        { metric: "Demand Forecasting", improvement: "85% Accuracy" },
        { metric: "Supply Chain Efficiency", improvement: "60% Improvement" },
        { metric: "Customer Retention", improvement: "45% Increase" },
        { metric: "Revenue Growth", improvement: "30% Increase" }
      ],
      technologies: ["Custom CRM", "Predictive AI", "Supply Chain Integration", "Customer Portal"],
      icon: "👕"
    },
    {
      company: "Traditional Chinese Medicine Clinic Chain",
      industry: "Healthcare",
      challenge: "Patient management across multiple locations, traditional medicine inventory tracking, and treatment history management.",
      solution: "Specialized TCM management system with patient records, herb inventory management, treatment protocols, and multi-location synchronization.",
      results: [
        { metric: "Patient Management", improvement: "90% Efficiency" },
        { metric: "Inventory Tracking", improvement: "95% Accuracy" },
        { metric: "Appointment Scheduling", improvement: "80% Faster" },
        { metric: "Operational Costs", improvement: "35% Reduction" }
      ],
      technologies: ["TCM System", "Multi-location Sync", "Patient Portal", "Inventory Management"],
      icon: "🏥"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Success <span className="highlight">Stories</span></h1>
            <p style={{ fontSize: '1.25rem' }}>
              See how we've helped businesses across different industries transform
              their operations with custom AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: '3rem' }}>
            {cases.map((caseStudy, index) => (
              <div key={index} className="service-card case-study-card">
                {/* Header */}
                <div className="service-header" style={{ background: 'rgba(15, 15, 35, 0.8)', backdropFilter: 'blur(20px)' }}>
                  <div className="company-name-container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      fontSize: '3.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      padding: '1rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(167, 139, 250, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                    }}>
                      {caseStudy.icon}
                    </div>
                    <div>
                      <h2 style={{
                        marginBottom: '0.5rem',
                        fontSize: '1.75rem'
                      }}>
                        {caseStudy.company}
                      </h2>
                      <p style={{
                        margin: 0,
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {caseStudy.industry} Industry
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                      <h3 style={{ marginBottom: '0.75rem' }}>
                        Challenge
                      </h3>
                      <p style={{ lineHeight: '1.6' }}>
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 style={{ marginBottom: '0.75rem' }}>
                        Solution
                      </h3>
                      <p style={{ lineHeight: '1.6' }}>
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="service-content">
                  <h3 style={{ marginBottom: '1.5rem' }}>Results Achieved</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="result-card" style={{
                        textAlign: 'center',
                        padding: '1.5rem'
                      }}>
                        <div className="result-improvement" style={{
                          fontSize: '1.5rem',
                          marginBottom: '0.5rem'
                        }}>
                          {result.improvement}
                        </div>
                        <div className="result-metric" style={{
                          fontSize: '0.875rem'
                        }}>
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <h4 style={{ marginBottom: '1rem' }}>Technologies Used</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                      {caseStudy.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="tech-tag"
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '1.5rem',
                            fontSize: '0.875rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: '#3b82f6', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>
              Ready to Write Your Success Story?
            </h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join these successful companies and transform your business with our
              custom AI-powered solutions.
            </p>
            <Link
              to="/contact"
              className="btn btn-secondary"
              style={{ background: 'white', color: '#3b82f6', borderColor: 'white' }}
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
