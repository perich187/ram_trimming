'use client'
import Link from 'next/link'
import { useState } from 'react'

const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC1FGc_sSS27sCh9zHn4U9EKYmXCPGqusvaRuvljHtwH4xSXUS_ydGRs7yekJf8P2-gcICZD73Ien2gLYr3rKpqcddn4Jb0zR8_bwk1xFMrWhReCCYEpmFm9hMtCbG9f43eN62pciJGwmfnl3ys6kY84bOP9A8kVdfTKWG9I0BApUWZeEkkIDH-32BQVozwPzxfjti2qWp0RHL_OaZoXog0vrvkSjWBhiJI7tSSsTcHSspinge2_KKXFkwnunuomjlDq_GD4xw0-YTY'
const CRAFTSMAN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAH68DclwPpBqh5vfHvGETI9AnNqPxNbwP0cusfz42jFbekv_qW_ZRuLfZ4Ii5AWBo4yd4it-viY0BEpRQCCm85I1EuTQx8c6ApEx7DX2ac7iXNcz_WtfT3PPW0y8cZaDnwCCStp3H1qGLmLepfPU9Xb8lrC8C085-MO9IVpSQ1yX3ANsHz4umVgTVq3CMP94BCPZNsui-fm5d5YAT1pbL4a8INTCyxetYJa8lvHr2hP2SvhOR-K99E_X5JXn98IZ82iYITqlUXIGja'
const MARINE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApt-7-KRPnp-5_rXRSG-HQwuKDQYYQulpBnreR_y8GgHREEd7oIDemu6tANWJ5-vfXY8XSq0jh6q9UGezabS-A7gfKMpqJuTPV1RK3SVG8gAskQD5SEND4rnS2pxOuuGiQurZoyS8Ikt53YDbXKU8A4RNc2UUqWRcLyKEejZlC_PXcOiGQESzbvy2xADW_Q0_POudpsgylTV3XxJ61gm50S7FAgGs-d1Pqjt3HpCn_9phRMHfY8xLMXy0-JIG4pNEpaMvCIfZ8tjiY'
const MOTOR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDFcIFHyT9FQOwqQQfl-6Z29sxRK3Y0em9AJ7Uay6t277xOwaqNRwhm_xdV7suTzW-gptuEECbvmTpPrkYc0aFIsSnueKPWLNVgXzcOg8JGfT9pT-HClTCZ44P9gHd2xuigXLZqiqh-9uWIDphibyev3933Kj7D1Zmi09OoLsw2-eTDmp0mJ06AggTHBfTcakqIIl866spiRgZ1L0x1msL0Ne11guZc4t0Jvj7_4jXGIsrLeCaxxylm6Vio5_5daVnGs5ox65MROmwf'
const CLOSING =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBOwsH3faYsqe_QJyHIVOLOFi7QmLKfSmj71ljR3BhaNxrYnojVtj_vXs6zb-85ydGk0ENqLNbRThQh0X2gXZo2nCAfTBmk4u0J8a6bgk-AIQfx3LnCJvIdHshWEAzIrdyrEpW7hzH6ERNWjSrYfejY1JwDm55KdRI2erOTVw4AbhJF3ZfBeZ9IF9sCIccH1ZCjYxef6MR0pDwQ2Y9W6hg7KeF6d0Rhgkpgu81Ew7cew_2ECSXNM0Tp5RN2k4QOJHwT7-YGaXXgCXYZ'

export default function HomePage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Marine Trimming',
    details: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thanks! We will be in touch within 24 hours.')
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative',
          height: '85vh',
          minHeight: 560,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          marginTop: 'var(--rt-nav-h)',
        }}
      >
        <img
          src={HERO_BG}
          alt="Marine boat on open water"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          className="hero-gradient"
          style={{ position: 'absolute', inset: 0 }}
        />
        {/* Diagonal accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: 340,
            height: 8,
            background: 'var(--rt-white)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: 'var(--rt-white)',
            padding: '0 24px',
            maxWidth: 880,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div style={{ width: 40, height: 3, background: 'var(--rt-white)' }} />
            <span className="caps" style={{ color: 'var(--rt-white)' }}>
              Marine &amp; Motor Trimming Specialist
            </span>
            <div style={{ width: 40, height: 3, background: 'var(--rt-white)' }} />
          </div>
          <h1
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 'clamp(40px,6vw,72px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.025em',
              marginBottom: 24,
            }}
          >
            Mastering the Art of
            <br />
            Marine &amp; Motor Trimming
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,2vw,20px)',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.82)',
              marginBottom: 40,
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Expertise, Durability, and Quality since 2017. We transform boats and vehicles with
            professional-grade craftsmanship built for the elements.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>
        {/* Scroll hint */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            right: 64,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            zIndex: 1,
          }}
        >
          <span className="caps" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9 }}>
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
            }}
          />
        </div>
      </section>

      {/* ── Marquee Strip ── */}
      <div
        style={{
          background: 'var(--rt-black)',
          padding: '14px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderTop: '3px solid var(--rt-white)',
        }}
      >
        <div style={{ display: 'inline-flex', animation: 'marquee 28s linear infinite' }}>
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span className="caps" style={{ color: 'var(--rt-white)', margin: '0 32px' }}>
                Biminis &amp; Bars
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>—</span>
              <span className="caps" style={{ color: 'rgba(255,255,255,0.5)', margin: '0 32px' }}>
                Boat Upholstery
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>—</span>
              <span className="caps" style={{ color: 'var(--rt-white)', margin: '0 32px' }}>
                Canvas Covers
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>—</span>
              <span className="caps" style={{ color: 'rgba(255,255,255,0.5)', margin: '0 32px' }}>
                Seat Restoration
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>—</span>
              <span className="caps" style={{ color: 'var(--rt-white)', margin: '0 32px' }}>
                Motor Trimming
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>—</span>
              <span className="caps" style={{ color: 'rgba(255,255,255,0.5)', margin: '0 32px' }}>
                Sundecks
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>—</span>
              <span className="caps" style={{ color: 'var(--rt-white)', margin: '0 32px' }}>
                Free Quotes
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)', margin: '0 8px' }}>—</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Expertise / About ── */}
      <section
        id="expertise"
        style={{ padding: 'var(--rt-section-gap) 64px', background: 'var(--rt-surface)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="section-label">
            <span>Est. 2017 — Mandurah, WA</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
          >
            {/* Left copy */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 'clamp(32px,4vw,52px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: 24,
                  color: 'var(--rt-black)',
                }}
              >
                Precision Crafted
                <br />
                for the Elements
              </h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: 'var(--rt-grey-text)',
                  marginBottom: 32,
                }}
              >
                Operating in the industry since 2017, our team at Ram&apos;s Trimming combines
                technical mastery with modern marine-grade materials. We specialise in the complex
                geometry of boat covers, custom yacht interiors, and motor trimming that withstands
                the harshest sun and salt.
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: 'var(--rt-grey-text)',
                  marginBottom: 48,
                }}
              >
                From Mandurah to surrounds, every job — no matter how small — is treated with the
                same dedication to quality and precision.
              </p>
              {/* Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 32,
                  paddingTop: 32,
                  borderTop: '2px solid var(--rt-grey-light)',
                }}
              >
                <div className="stat-item">
                  <h3>7+</h3>
                  <p>Years in Business</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Work Guarantee</p>
                </div>
                <div className="stat-item">
                  <h3>Free</h3>
                  <p>Quotes Always</p>
                </div>
              </div>
            </div>
            {/* Right image */}
            <div style={{ position: 'relative' }}>
              <img
                src={CRAFTSMAN}
                alt="Craftsman at work"
                style={{
                  width: '100%',
                  height: 520,
                  objectFit: 'cover',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -24,
                  left: -32,
                  background: 'var(--rt-black)',
                  padding: '28px 32px',
                }}
              >
                <span className="caps" style={{ color: 'var(--rt-white)' }}>
                  Marine Grade
                </span>
                <p
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 20,
                    color: 'var(--rt-white)',
                    marginTop: 8,
                    fontWeight: 700,
                  }}
                >
                  Built to Last.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:768px) {
            #expertise { padding-left:16px !important; padding-right:16px !important; }
            #expertise > div > div[style*="grid-template-columns"] { grid-template-columns:1fr !important; gap:40px !important; }
          }
        `}</style>
      </section>

      {/* ── Services Overview ── */}
      <section
        id="services"
        style={{ padding: 'var(--rt-section-gap) 64px' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="title-underline">
            <h2>Core Services</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
            }}
          >
            {/* Marine */}
            <div>
              <div style={{ overflow: 'hidden', marginBottom: 32 }}>
                <img
                  src={MARINE}
                  alt="Marine trimming"
                  style={{
                    width: '100%',
                    height: 280,
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                  }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                  onMouseOut={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--rt-black)' }}>
                  directions_boat
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 28,
                    fontWeight: 700,
                    color: 'var(--rt-black)',
                  }}
                >
                  Marine Trimming
                </h3>
              </div>
              <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {[
                  'Biminis and Bars',
                  'Duckbill Replacement',
                  'Canopy Materials',
                  'Rear Extensions',
                  'Sun Decks',
                  'Front & Side Clears',
                  'Full Camper Covers',
                  'Seat Re-upholstering',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 15,
                      color: 'var(--rt-grey-text)',
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: 'var(--rt-black)',
                        display: 'block',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="btn btn-primary"
                style={{ fontSize: 11, padding: '14px 32px' }}
              >
                View All Marine Services
              </Link>
            </div>

            {/* Motor */}
            <div>
              <div style={{ overflow: 'hidden', marginBottom: 32 }}>
                <img
                  src={MOTOR}
                  alt="Motor trimming"
                  style={{
                    width: '100%',
                    height: 280,
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                  }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                  onMouseOut={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--rt-black)' }}>
                  directions_car
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 28,
                    fontWeight: 700,
                    color: 'var(--rt-black)',
                  }}
                >
                  Motor Trimming
                </h3>
              </div>
              <ul
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 10,
                  marginBottom: 28,
                }}
              >
                {[
                  'Head Trim Linings',
                  'Door Panel Repair',
                  'Custom Car Seats',
                  'Ute Canvas Covers',
                  'Seat Bolstering',
                  'Golf Buggy Seats',
                  'Full Interior Restores',
                  'Canvas Replacements',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 15,
                      color: 'var(--rt-grey-text)',
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: 'var(--rt-black)',
                        display: 'block',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="btn btn-primary"
                style={{ fontSize: 11, padding: '14px 32px' }}
              >
                View All Motor Services
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:768px) {
            #services { padding-left:16px !important; padding-right:16px !important; }
            #services > div > div[style*="grid-template-columns"] { grid-template-columns:1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Why Choose Rams + Quote Form ── */}
      <section
        id="why"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
      >
        {/* Left: Why Choose Us */}
        <div
          style={{
            background: 'var(--rt-black)',
            color: 'var(--rt-white)',
            padding: 'var(--rt-section-gap) 64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            className="section-label-white section-label"
            style={{ marginBottom: 40 }}
          >
            <span>Why Ram&apos;s?</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 40,
              fontWeight: 700,
              color: 'var(--rt-white)',
              marginBottom: 48,
              lineHeight: 1.15,
            }}
          >
            Built Different.
            <br />
            Built to Last.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div className="why-item">
              <div className="why-icon-wrap">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h4>Unmatched Durability</h4>
                <p>
                  We use only UV-treated threads and genuine marine-grade fabrics to ensure your
                  investment lasts decades, not just seasons.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon-wrap">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <div>
                <h4>Fast Turnaround</h4>
                <p>
                  Our experienced crew delivers professional results with efficient lead times to get
                  you back on the water or road quickly.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon-wrap">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <div>
                <h4>Custom Engineering</h4>
                <p>
                  No two boats or vehicles are the same. Every trim and cover is custom templated
                  for a perfect structural fit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div
          id="quote"
          style={{
            background: 'var(--rt-surface)',
            padding: 'var(--rt-section-gap) 64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div className="section-label">
            <span>Free Assessment</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 40,
              fontWeight: 700,
              color: 'var(--rt-black)',
              marginBottom: 16,
            }}
          >
            Request a Quote
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--rt-grey-text)',
              marginBottom: 40,
              lineHeight: 1.65,
            }}
          >
            Describe your requirements and we&apos;ll provide a professional assessment within 24
            hours.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
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
                  placeholder="0435 929 441"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
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
              <label className="form-label">Service Type</label>
              <select
                className="form-select"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option>Marine Trimming</option>
                <option>Motor Body Trimming</option>
                <option>Custom Upholstery</option>
                <option>Repairs &amp; Maintenance</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Project Details</label>
              <textarea
                className="form-textarea"
                placeholder="Describe your boat or vehicle and what you need..."
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-red">
              Submit My Request
            </button>
          </form>
        </div>
        <style>{`
          @media(max-width:900px) {
            #why { grid-template-columns:1fr !important; }
            #why > div:first-child { padding:64px 24px !important; }
            #why > div:last-child { padding:64px 24px !important; }
          }
        `}</style>
      </section>

      {/* ── Closing Atmospheric Section ── */}
      <section
        style={{
          height: '55vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={CLOSING}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div
            style={{
              border: '6px solid rgba(255,255,255,0.2)',
              padding: '48px 64px',
              backdropFilter: 'blur(4px)',
              maxWidth: 680,
            }}
          >
            <p
              className="caps"
              style={{ color: 'var(--rt-white)', letterSpacing: '0.2em', marginBottom: 20 }}
            >
              Crafted for Excellence
            </p>
            <h2
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 'clamp(32px,5vw,52px)',
                color: 'var(--rt-white)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Precision on the Waves.
            </h2>
            <div
              style={{
                width: 80,
                height: 3,
                background: 'var(--rt-white)',
                margin: '24px auto 0',
              }}
            />
          </div>
        </div>
      </section>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
