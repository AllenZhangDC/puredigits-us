import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const services = [
    "CRM/ERP Development",
    "AI Integration",
    "Mobile App Development",
    "Custom Software Solutions",
    "System Integration",
    "Consulting Services"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Get In <span className="highlight">Touch</span></h1>
            <p style={{ fontSize: '1.25rem' }}>
              Ready to transform your business with custom AI-powered solutions?
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Start Your Project Today</h2>

              {isSubmitted ? (
                <div style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: '#166534', marginBottom: '0.5rem' }}>Thank You!</h3>
                  <p style={{ color: '#15803d' }}>
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '16px'
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '16px'
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '16px'
                        }}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '16px'
                        }}
                        placeholder="(202) 823-9437"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '16px',
                        resize: 'vertical'
                      }}
                      placeholder="Tell us about your project, requirements, timeline, and any specific challenges you're facing..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>
                    Send Message ✈️
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Contact Information</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                We're here to help you transform your business. Reach out to us through
                any of these channels and we'll get back to you promptly.
              </p>

              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: '#1f2937' }}>📧 Email Us</h3>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1f2937' }}>service@puredigits.us</p>
                  <p style={{ fontSize: '14px', color: '#4b5563' }}>Send us an email anytime</p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: '#1f2937' }}>📞 Call Us</h3>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1f2937' }}>(202) 823-9437</p>
                  <p style={{ fontSize: '14px', color: '#4b5563' }}>Mon-Fri from 8am to 6pm</p>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: '#1f2937' }}>📍 Visit Us</h3>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem', color: '#1f2937' }}>
                    427 Christopher Ave<br />Gaithersburg, MD
                  </p>
                  <p style={{ fontSize: '14px', color: '#4b5563' }}>Come say hello at our office</p>
                </div>
              </div>

              <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '0.75rem', color: '#1f2937' }}>⚡ Quick Response Guarantee</h3>
                <p style={{ fontSize: '14px', color: '#4b5563' }}>
                  We typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
