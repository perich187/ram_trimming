'use client'
import { useState } from 'react'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'

const CONTACT_HERO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCNqVjPQf5nBZXz0VkePs25AOJ96V3-SXwQTtEjsqeJ6etto0M9MwPNOk7DrNC7yV7TBKOiH9mRIjG1Aojhkv2zNMU9dbyvzTR_QK7oi_NEwpPSgak9bw2_-fYDD4ywVQZD4h7cZB2e2rPvwFRnL3t07yf-kwB8n_YpqJSv5NEgSVQBJzlRkiovdlkHSpmafnhmL7uF97aq444FTVfJEqfd_wlTlP8EcRO-TxBPSa8tnGbZMSVD-OeB121rOOruSNQwrKdot-qUQoX0'
const MAP_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAoiFuUABTAzZ8PSf09DfUBPX7YchOaVF-XjzT69JmCF79LqA4wG9CllRMWoS1ApOweySMGqeHl2rkvcbQ8lrOIJ_NhTBd4-b8hHToHlLP0GRSwH1P2XmiDtXvq4VH4oxAMssxLq24xm430icyO9OkXSFoS8_nWMTpPhuRmtvQbXQuJxcf0uedUhJ-I9DEJmzFDzqhp66F3wzIa511ovsEKLi24UyIy0qX9GhTBfFQKlwHRASZGErds6Nw50sHxW_-oGd2JdK9qiXnp'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Marine',
    details: '',
  })
  const [uploading, setUploading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We'll get back to you within 24 hours.")
  }

  return (
    <main style={{ paddingTop: 'var(--rt-nav-h)' }}>
      {/* ── Hero Section ── */}
      <section
        style={{
          position: 'relative',
          height: 400,
          display: 'flex',
          alignItems: 'center',
          padding: '0 64px',
          overflow: 'hidden',
          background: 'var(--rt-black)',
          color: 'var(--rt-white)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
          <img
            src={CONTACT_HERO}
            alt="A high-fidelity close-up of premium marine upholstery with impeccable stitching."
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
          <AnimatedHeading
            as="h1"
            delay={0.2}
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 'clamp(32px,4vw,48px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            Contact Our Workshop
          </AnimatedHeading>
          <div style={{ height: 4, width: 96, background: 'var(--rt-white)', marginBottom: 24 }} />
          <AnimatedText delay={0.45} style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.9 }}>
            Expert marine and motor trimming in Perth. Let&apos;s discuss your custom project, from
            luxury yacht interiors to vintage vehicle restorations.
          </AnimatedText>
        </div>
      </section>

      {/* ── Main Content Split ── */}
      <section
        style={{
          padding: 'var(--rt-section-gap) 64px',
          display: 'grid',
          gridTemplateColumns: '5fr 7fr',
          gap: 24,
        }}
      >
        {/* Left: Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ marginBottom: 48 }}>
            <AnimatedHeading
              as="h2"
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 32,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Visit Us
            </AnimatedHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 30, color: 'var(--rt-black)' }}>
                  location_on
                </span>
                <div>
                  <p className="caps" style={{ color: '#5d5e66', marginBottom: 4 }}>Workshop Address</p>
                  <p
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--rt-black)',
                    }}
                  >
                    Perth, Western Australia
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 30, color: 'var(--rt-black)' }}>
                  call
                </span>
                <div>
                  <p className="caps" style={{ color: '#5d5e66', marginBottom: 4 }}>Direct Line</p>
                  <a
                    href="tel:0895818180"
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--rt-black)',
                    }}
                  >
                    (08) 9581 8180
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 30, color: 'var(--rt-black)' }}>
                  mail
                </span>
                <div>
                  <p className="caps" style={{ color: '#5d5e66', marginBottom: 4 }}>Email Inquiry</p>
                  <a
                    href="mailto:rhys@ramstrimming.com.au"
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 17,
                      fontWeight: 700,
                      color: 'var(--rt-black)',
                    }}
                  >
                    rhys@ramstrimming.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div
            style={{
              background: '#eeeeef',
              padding: 24,
              borderLeft: '4px solid var(--rt-black)',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
            }}
          >
            <h3 className="caps" style={{ marginBottom: 16, color: 'var(--rt-black)' }}>
              Operating Hours
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 16 }}>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #cfc4c5',
                  paddingBottom: 8,
                }}
              >
                <span>Monday - Friday</span>
                <span style={{ fontWeight: 700 }}>8:00 AM - 4:00 PM</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #cfc4c5',
                  paddingBottom: 8,
                }}
              >
                <span>Saturday</span>
                <span style={{ fontWeight: 700 }}>By Appointment</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#5d5e66',
                }}
              >
                <span>Sunday</span>
                <span style={{ fontStyle: 'italic', fontWeight: 700 }}>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div>
          <div
            style={{
              background: 'var(--rt-white)',
              padding: 48,
              border: '2px solid #cfc4c5',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
            }}
          >
            <AnimatedHeading
              as="h2"
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
              }}
            >
              Request a Quote
            </AnimatedHeading>
            <AnimatedText style={{ fontSize: 16, color: '#4c4546', marginBottom: 32, lineHeight: 1.5 }}>
              Tell us about your project requirements for a detailed professional estimate.
            </AnimatedText>
            <form
              onSubmit={handleSubmit}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
            >
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="(08) 9581 8180"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Type of Work</label>
                <div style={{ position: 'relative' }}>
                  <select
                    className="form-select"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="Marine">Marine</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Custom">Custom</option>
                  </select>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      position: 'absolute',
                      right: 16,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: '#7e7576',
                    }}
                  >
                    expand_more
                  </span>
                </div>
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Upload Photos</label>
                <label
                  style={{
                    width: '100%',
                    border: '2px dashed #cfc4c5',
                    padding: '24px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLLabelElement).style.background = '#f3f3f4')}
                  onMouseOut={(e) => ((e.currentTarget as HTMLLabelElement).style.background = 'transparent')}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#7e7576', marginBottom: 8 }}>
                    upload_file
                  </span>
                  <span style={{ fontSize: 14, color: '#4c4546' }}>Click to upload or drag and drop</span>
                  <span style={{ fontSize: 12, color: '#7e7576', marginTop: 4 }}>JPG, PNG (Max 10MB per file)</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    onChange={() => setUploading(true)}
                  />
                </label>
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Project Details</label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe the scope, materials, and any specific requirements..."
                  rows={5}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  style={{ minHeight: 120 }}
                />
              </div>
              <div style={{ gridColumn: 'span 2', paddingTop: 16 }}>
                <button
                  type="submit"
                  className="btn btn-red"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    fontSize: 13,
                    letterSpacing: '0.15em',
                  }}
                >
                  <span>Submit Request</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ width: '100%', height: 4, background: 'var(--rt-black)' }} />

      {/* ── Map Section ── */}
      <section style={{ height: 500, position: 'relative', background: '#eeeeef' }}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img
            src={MAP_IMG}
            alt="An aerial satellite perspective of the Perth coastline and Swan River in Western Australia."
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Map overlay pin */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                background: 'var(--rt-black)',
                color: 'var(--rt-white)',
                padding: 24,
                boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
                position: 'relative',
              }}
            >
              <div className="caps" style={{ marginBottom: 4 }}>Service Area</div>
              <div
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 24,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                Perth, WA
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '10px solid var(--rt-black)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px) {
          section[style*="gridTemplateColumns: 5fr 7fr"] { grid-template-columns:1fr !important; }
        }
        @media(max-width:768px) {
          section { padding-left:16px !important; padding-right:16px !important; }
          header { padding-left:16px !important; padding-right:16px !important; }
          section > div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns:1fr !important; }
          section > div > div > form { grid-template-columns:1fr !important; }
          section > div > div > form > div[style*="span 2"] { grid-column: span 1 !important; }
        }
      `}</style>

      {/* FAB */}
      <a href="tel:0895818180" className="fab" aria-label="Call us">
        <span className="material-symbols-outlined">phone</span>
      </a>
    </main>
  )
}
