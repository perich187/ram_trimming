import Link from 'next/link'

const WORKSHOP_HERO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDB-EieVgSsJnCgjpE4vPSEUM5oWow2YDyl6_7GFjSF4eP4w2R-nptI0339PoujoMYwHIoqTRNFptXMF_2om1HJQ3ZMYOeFMQwY9JQK2rzBnW6qai_veZOFfEBWF65IFrNilDmLauIaftKQXffzc3wSwjRqMl-2gpHStHgZRG8aPG8cTlMQzeA87HG3Xi6wieAjXZhvZk6uqyQQNwZoKekB1VYRv8ZQpdVUMToDbHsgqax4wV3uOEqxAaJC7zzCg6n0DERY8xNaynNk'
const CRAFTSMANSHIP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDuh6WOdplPQNK4NiWYrG5QT-Hz3qhQk_A_Yk4n_OOLe0ozuNVvLfoRrwkvD8BOxHcJl8ghT_bjjW8Hf3jRML8mTRQ0LYoq4i5pvBbnFQ9rNrSJqFtZWugQwat7PoOx_SqYt8gxDbhTAE-pmhVulHGcbdUaa5AIKMQgUBhUxKqVQpKDqvYB7uXwC1Slyyfa6JdzSViQWltH3bGGFjocg88T0ZhiPTkFaCTt5rL0lCUfzVbWa_o3iKvoZgFASrZvYkIGl8zcqtEOHuU6'
const WORKSHOP_INTERIOR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnYpeowi_xDwjv9tp_ueiiKAn_C8027CPdbH2mIAOvKSRxxM_Bm6BMo_TjgSSr-8CVeh_K0iF7bU1aabkAY9SSep_Ousv8A04Iw12sJpUy9iKaajB_a4PMSnt8yGQNjvQCiMFe0Fb9a2r735OPPN2JXiXu53LBcg95pQru7UeGusxX-YJ2VTRmFuCtgDnOqKb1f9cgyspEWeq4K2FWeYeEKAk45bTnn5JYDHgeMQ-bTrq9RAVrnC9t0fN85cYwdhBJaBZ8HRbXbFZz'

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero">
        <img src={WORKSHOP_HERO} alt="" />
        <div className="page-hero-content">
          <span className="page-hero-tag">Our Story</span>
          <h1>About Ram&apos;s Trimming</h1>
        </div>
      </div>

      {/* ── Story Section ── */}
      <section style={{ padding: 'var(--rt-section-gap) 64px', background: 'var(--rt-surface)' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div>
            <div className="section-label">
              <span>Est. 2017</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 700,
                color: 'var(--rt-black)',
                marginBottom: 28,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
              }}
            >
              Passion for Precision.
              <br />
              Built from the Ground Up.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--rt-grey-text)', marginBottom: 20 }}>
              Ram&apos;s Trimming was founded in 2017 with a single mission: deliver exceptional
              marine and motor trimming to the Mandurah community and beyond. What started as a
              passion project has grown into a trusted name for quality craftsmanship across Western
              Australia.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--rt-grey-text)', marginBottom: 20 }}>
              We believe that quality workmanship speaks for itself. Every stitch, every seam, and
              every material we choose is selected with longevity in mind. The ocean is unforgiving,
              and so are we — we don&apos;t cut corners.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--rt-grey-text)' }}>
              Whether you&apos;re a weekend boatie who needs a bimini top, or a collector looking
              to restore a classic car interior, you&apos;ll get the same level of attention and
              expertise on every job.
            </p>
          </div>
          <div>
            <img
              src={CRAFTSMANSHIP}
              alt="Rhys — Founder"
              style={{
                width: '100%',
                height: 580,
                objectFit: 'cover',
                boxShadow: '0 24px 60px rgba(0,0,0,0.14)',
              }}
            />
          </div>
        </div>
        <style>{`
          @media(max-width:900px) {
            .about-story-grid { grid-template-columns:1fr !important; }
          }
          @media(max-width:768px) {
            .about-story-section { padding-left:16px !important; padding-right:16px !important; }
          }
        `}</style>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: 'var(--rt-black)', padding: 64 }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 48,
            textAlign: 'center',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 52,
                fontWeight: 700,
                color: 'var(--rt-white)',
              }}
            >
              7+
            </h3>
            <p className="caps" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12 }}>
              Years in Business
            </p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 52,
                fontWeight: 700,
                color: 'var(--rt-white)',
              }}
            >
              100%
            </h3>
            <p className="caps" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12 }}>
              Satisfaction Guarantee
            </p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 52,
                fontWeight: 700,
                color: 'var(--rt-white)',
              }}
            >
              Free
            </h3>
            <p className="caps" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12 }}>
              Quotes Always
            </p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 52,
                fontWeight: 700,
                color: 'var(--rt-white)',
              }}
            >
              WA
            </h3>
            <p className="caps" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12 }}>
              Based in Mandurah
            </p>
          </div>
        </div>
        <style>{`
          @media(max-width:768px) {
            .stats-bar { padding:48px 16px !important; }
            .stats-grid { grid-template-columns:1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: 'var(--rt-section-gap) 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="title-underline">
            <h2>Our Values</h2>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}
          >
            <div
              style={{
                borderTop: '4px solid var(--rt-black)',
                padding: '40px 32px',
                background: 'var(--rt-surface)',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 48, color: 'var(--rt-black)', marginBottom: 20, display: 'block' }}
              >
                star
              </span>
              <h3
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 24,
                  fontWeight: 700,
                  color: 'var(--rt-black)',
                  marginBottom: 16,
                }}
              >
                Expertise
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--rt-grey-text)' }}>
                Every project is handled with deep technical knowledge. We stay up-to-date with the
                latest materials and techniques to deliver the best possible result for every job.
              </p>
            </div>
            <div
              style={{
                borderTop: '4px solid var(--rt-black)',
                padding: '40px 32px',
                background: 'var(--rt-surface)',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 48, color: 'var(--rt-black)', marginBottom: 20, display: 'block' }}
              >
                shield
              </span>
              <h3
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 24,
                  fontWeight: 700,
                  color: 'var(--rt-black)',
                  marginBottom: 16,
                }}
              >
                Durability
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--rt-grey-text)' }}>
                We only use marine-grade, UV-treated materials that are built to last. We back every
                job with our quality guarantee — because we&apos;re confident our work stands up to
                anything.
              </p>
            </div>
            <div
              style={{
                borderTop: '4px solid var(--rt-black)',
                padding: '40px 32px',
                background: 'var(--rt-surface)',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 48, color: 'var(--rt-black)', marginBottom: 20, display: 'block' }}
              >
                handshake
              </span>
              <h3
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 24,
                  fontWeight: 700,
                  color: 'var(--rt-black)',
                  marginBottom: 16,
                }}
              >
                Quality
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--rt-grey-text)' }}>
                Quality isn&apos;t just about the materials — it&apos;s about the attention to
                detail, the care taken with each stitch, and the time invested in getting it exactly
                right the first time.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:900px) {
            .values-grid { grid-template-columns:1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Why Us ── */}
      <section
        style={{ background: 'var(--rt-black)', padding: 'var(--rt-section-gap) 64px' }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src={WORKSHOP_INTERIOR}
              alt="Our workshop"
              style={{ width: '100%', height: 480, objectFit: 'cover' }}
            />
          </div>
          <div>
            <div
              className="section-label-white section-label"
              style={{ marginBottom: 32 }}
            >
              <span>Why Choose Us</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 40,
                fontWeight: 700,
                color: 'var(--rt-white)',
                marginBottom: 40,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              No Job Too Big.
              <br />
              No Job Too Small.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                {
                  icon: 'check_circle',
                  title: 'Free Quotes',
                  desc: 'We provide detailed, no-obligation quotes so you know exactly what you\'re getting before we start.',
                },
                {
                  icon: 'schedule',
                  title: 'Fast Turnaround',
                  desc: 'We respect your time. Our experienced team works efficiently to get your boat or vehicle back to you quickly.',
                },
                {
                  icon: 'precision_manufacturing',
                  title: 'Custom Every Time',
                  desc: 'Every piece is templated and fabricated specifically for your vessel or vehicle — no off-the-shelf solutions.',
                },
                {
                  icon: 'verified',
                  title: 'Quality Guaranteed',
                  desc: '100% professional work guaranteed on every single job. We stand behind everything we make.',
                },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      background: 'var(--rt-white)',
                      padding: 10,
                      flexShrink: 0,
                      fontSize: 22,
                      color: 'var(--rt-black)',
                    }}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="caps" style={{ color: 'var(--rt-white)', marginBottom: 8 }}>
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: 15,
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:900px) {
            .why-grid { grid-template-columns:1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: '96px 64px',
          textAlign: 'center',
          background: 'var(--rt-surface)',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--rt-font-display)',
            fontSize: 40,
            fontWeight: 700,
            color: 'var(--rt-black)',
            marginBottom: 20,
          }}
        >
          Ready to Work Together?
        </h2>
        <p
          style={{
            fontSize: 17,
            color: 'var(--rt-grey-text)',
            marginBottom: 40,
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.65,
          }}
        >
          Get in touch for a free, no-obligation quote on your marine or motor trimming project.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn-primary">
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="btn"
            style={{ background: 'var(--rt-black)', color: 'var(--rt-white)' }}
          >
            View Services
          </Link>
        </div>
      </section>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
