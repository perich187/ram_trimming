'use client'
import { useState } from 'react'

const CONTACT_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCNqVjPQf5nBZXz0VkePs25AOJ96V3-SXwQTtEjsqeJ6etto0M9MwPNOk7DrNC7yV7TBKOiH9mRIjG1Aojhkv2zNMU9dbyvzTR_QK7oi_NEwpPSgak9bw2_-fYDD4ywVQZD4h7cZB2e2rPvwFRnL3t07yf-kwB8n_YpqJSv5NEgSVQBJzlRkiovdlkHSpmafnhmL7uF97aq444FTVfJEqfd_wlTlP8EcRO-TxBPSa8tnGbZMSVD-OeB121rOOruSNQwrKdot-qUQoX0'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    vessel: '',
    contactTime: 'Any time',
    details: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We\'ll get back to you within 24 hours.')
  }

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero">
        <img src={CONTACT_IMG} alt="" />
        <div className="page-hero-content">
          <span className="page-hero-tag">Get In Touch</span>
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* ── Contact Cards ── */}
      <section style={{ padding: '80px 64px', background: 'var(--rt-surface)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="title-underline">
            <h2>Get in Touch</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 24,
              marginBottom: 80,
            }}
          >
            <div className="contact-card">
              <div className="contact-card-icon">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:0435929441">0435 929 441</a>
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: 'var(--rt-font-body)',
                    fontWeight: 400,
                    color: 'var(--rt-grey-text)',
                    marginTop: 8,
                  }}
                >
                  Mon–Fri: 8am – 5pm
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:rhys@ramstrimming.com.au" style={{ fontSize: 17 }}>
                  rhys@ramstrimming.com.au
                </a>
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: 'var(--rt-font-body)',
                    fontWeight: 400,
                    color: 'var(--rt-grey-text)',
                    marginTop: 8,
                  }}
                >
                  We reply within 24 hours
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4>Find Us</h4>
                <p>Mandurah, WA 6210</p>
                <p
                  style={{
                    fontSize: 14,
                    fontFamily: 'var(--rt-font-body)',
                    fontWeight: 400,
                    color: 'var(--rt-grey-text)',
                    marginTop: 8,
                  }}
                >
                  Servicing Mandurah &amp; surrounds
                </p>
              </div>
            </div>
          </div>

          {/* ── Quote Form + Info Panel ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'start',
            }}
          >
            {/* Form */}
            <div>
              <div className="section-label" style={{ marginBottom: 32 }}>
                <span>Free Quote Request</span>
              </div>
              <h3
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 36,
                  fontWeight: 700,
                  color: 'var(--rt-black)',
                  marginBottom: 12,
                  lineHeight: 1.15,
                }}
              >
                Tell us about your project
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--rt-grey-text)',
                  marginBottom: 40,
                  lineHeight: 1.65,
                }}
              >
                Fill out the form below and we&apos;ll get back to you with a professional
                assessment within 24 hours — completely free, no obligation.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Rhys Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      className="form-input"
                      type="tel"
                      placeholder="04XX XXX XXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Service Required</label>
                  <select
                    className="form-select"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option>Marine Trimming — Biminis &amp; Bars</option>
                    <option>Marine Trimming — Boat Covers &amp; Campers</option>
                    <option>Marine Trimming — Clears &amp; Curtains</option>
                    <option>Marine Trimming — Boat Upholstery</option>
                    <option>Marine Trimming — Boat Carpets</option>
                    <option>Marine Trimming — Sundecks &amp; Extensions</option>
                    <option>Motor Trimming — Seats &amp; Bolstering</option>
                    <option>Motor Trimming — Headliners</option>
                    <option>Motor Trimming — Door Panels</option>
                    <option>Motor Trimming — Ute Canvas Covers</option>
                    <option>Motor Trimming — Golf Buggy Seats</option>
                    <option>Repairs &amp; Restoration</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div className="form-group">
                    <label className="form-label">Vessel / Vehicle Type</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="e.g. Quintrex 520, Ford Ranger"
                      value={form.vessel}
                      onChange={(e) => setForm({ ...form, vessel: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Contact Time</label>
                    <select
                      className="form-select"
                      value={form.contactTime}
                      onChange={(e) => setForm({ ...form, contactTime: e.target.value })}
                    >
                      <option>Any time</option>
                      <option>Morning (8am – 12pm)</option>
                      <option>Afternoon (12pm – 5pm)</option>
                      <option>Email only</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details *</label>
                  <textarea
                    className="form-textarea"
                    style={{ minHeight: 160 }}
                    placeholder="Please describe your project in detail — what needs to be done, any specific materials or colours you have in mind, and the current condition of the item..."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-red">
                  Submit My Quote Request
                </button>
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--rt-grey-mid)',
                    textAlign: 'center',
                    fontFamily: 'var(--rt-font-mono)',
                    letterSpacing: '0.06em',
                  }}
                >
                  We&apos;ll respond within 24 hours — Mon to Fri
                </p>
              </form>
            </div>

            {/* Info Panel */}
            <div>
              <div style={{ background: 'var(--rt-black)', padding: 48, marginBottom: 24 }}>
                <div
                  className="section-label-white section-label"
                  style={{ marginBottom: 28 }}
                >
                  <span>Business Hours</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      paddingBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--rt-font-mono)',
                        fontSize: 12,
                        color: 'var(--rt-white)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Monday – Friday
                    </span>
                    <span style={{ fontSize: 15, color: 'var(--rt-white)' }}>
                      8:00 AM – 5:00 PM
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      paddingBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--rt-font-mono)',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Saturday
                    </span>
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)' }}>
                      By Appointment
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontFamily: 'var(--rt-font-mono)',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Sunday
                    </span>
                    <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)' }}>Closed</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: 'var(--rt-surface)',
                  border: '1px solid var(--rt-grey-light)',
                  borderLeft: '4px solid var(--rt-black)',
                  padding: 32,
                  marginBottom: 24,
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--rt-black)',
                    marginBottom: 12,
                  }}
                >
                  Free Quotes
                </h4>
                <p style={{ fontSize: 15, color: 'var(--rt-grey-text)', lineHeight: 1.65 }}>
                  All quotes are completely free and include a detailed assessment of your project.
                  No surprises, no hidden costs.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--rt-surface)',
                  border: '1px solid var(--rt-grey-light)',
                  borderLeft: '4px solid var(--rt-black)',
                  padding: 32,
                  marginBottom: 24,
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--rt-black)',
                    marginBottom: 12,
                  }}
                >
                  Service Area
                </h4>
                <p style={{ fontSize: 15, color: 'var(--rt-grey-text)', lineHeight: 1.65 }}>
                  Based in Mandurah, WA. We service Mandurah and the surrounding Peel region.
                  Contact us to discuss your location.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--rt-white)',
                  border: '1px solid var(--rt-grey-light)',
                  padding: 32,
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: 'var(--rt-black)',
                    marginBottom: 8,
                  }}
                >
                  Need urgent help?
                </h4>
                <p
                  style={{
                    fontSize: 15,
                    color: 'rgba(0,0,0,0.7)',
                    marginBottom: 20,
                    lineHeight: 1.5,
                  }}
                >
                  Give us a call directly for urgent jobs or quick questions.
                </p>
                <a
                  href="tel:0435929441"
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 24,
                    fontWeight: 700,
                    color: 'var(--rt-black)',
                  }}
                >
                  0435 929 441
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:768px) { section { padding-left:16px !important; padding-right:16px !important; } }
          @media(max-width:900px) { .contact-layout { grid-template-columns:1fr !important; } }
          @media(max-width:768px) { .contact-cards { grid-template-columns:1fr !important; } }
        `}</style>
      </section>

      {/* ── Map Placeholder ── */}
      <div className="map-placeholder">
        <span className="material-symbols-outlined" style={{ fontSize: 56, color: 'var(--rt-white)' }}>
          location_on
        </span>
        <p
          style={{
            fontFamily: 'var(--rt-font-display)',
            fontSize: 24,
            color: 'var(--rt-white)',
            fontWeight: 700,
          }}
        >
          Mandurah, WA 6210
        </p>
        <p
          style={{
            fontFamily: 'var(--rt-font-mono)',
            fontSize: 11,
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Map integration coming soon
        </p>
        <a
          href="https://maps.google.com/?q=Mandurah+WA+6210"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            background: 'var(--rt-black)',
            color: 'var(--rt-white)',
            marginTop: 16,
            fontSize: 11,
            padding: '12px 28px',
            border: '2px solid rgba(255,255,255,0.3)',
          }}
        >
          Open in Google Maps
        </a>
      </div>

      {/* FAB */}
      <a href="tel:0435929441" className="fab" aria-label="Call us">
        <span className="material-symbols-outlined">phone</span>
      </a>
    </main>
  )
}
