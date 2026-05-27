'use client'
import Link from 'next/link'

const WORKSHOP_HERO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDB-EieVgSsJnCgjpE4vPSEUM5oWow2YDyl6_7GFjSF4eP4w2R-nptI0339PoujoMYwHIoqTRNFptXMF_2om1HJQ3ZMYOeFMQwY9JQK2rzBnW6qai_veZOFfEBWF65IFrNilDmLauIaftKQXffzc3wSwjRqMl-2gpHStHgZRG8aPG8cTlMQzeA87HG3Xi6wieAjXZhvZk6uqyQQNwZoKekB1VYRv8ZQpdVUMToDbHsgqax4wV3uOEqxAaJC7zzCg6n0DERY8xNaynNk'
const CRAFTSMANSHIP =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDuh6WOdplPQNK4NiWYrG5QT-Hz3qhQk_A_Yk4n_OOLe0ozuNVvLfoRrwkvD8BOxHcJl8ghT_bjjW8Hf3jRML8mTRQ0LYoq4i5pvBbnFQ9rNrSJqFtZWugQwat7PoOx_SqYt8gxDbhTAE-pmhVulHGcbdUaa5AIKMQgUBhUxKqVQpKDqvYB7uXwC1Slyyfa6JdzSViQWltH3bGGFjocg88T0ZhiPTkFaCTt5rL0lCUfzVbWa_o3iKvoZgFASrZvYkIGl8zcqtEOHuU6'
const WORKSHOP_INTERIOR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnYpeowi_xDwjv9tp_ueiiKAn_C8027CPdbH2mIAOvKSRxxM_Bm6BMo_TjgSSr-8CVeh_K0iF7bU1aabkAY9SSep_Ousv8A04Iw12sJpUy9iKaajB_a4PMSnt8yGQNjvQCiMFe0Fb9a2r735OPPN2JXiXu53LBcg95pQru7UeGusxX-YJ2VTRmFuCtgDnOqKb1f9cgyspEWeq4K2FWeYeEKAk45bTnn5JYDHgeMQ-bTrq9RAVrnC9t0fN85cYwdhBJaBZ8HRbXbFZz'

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', paddingLeft: 40, paddingRight: 40, paddingTop: 48, paddingBottom: 96 }}>

      {/* ── Hero Section ── */}
      <header
        style={{
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: 24,
          marginBottom: 96,
          marginTop: 'var(--rt-nav-h)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span
            className="caps"
            style={{ color: 'var(--rt-black)', marginBottom: 16, letterSpacing: '0.16em' }}
          >
            Established Expertise
          </span>
          <h1
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 'clamp(32px,4vw,48px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 32,
              color: 'var(--rt-black)',
            }}
          >
            Expertise, Durability, Quality.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#5d5e66',
              maxWidth: 600,
            }}
          >
            At RAMS TRIMMING, we build hard-wearing, fit-for-purpose textile solutions designed to
            handle the harshest environments Australia can throw at them.
          </p>
        </div>
        <div>
          <div
            style={{
              border: '2px solid var(--rt-black)',
              overflow: 'hidden',
              boxShadow: '4px 4px 0 0 var(--rt-black)',
              aspectRatio: '1 / 1',
            }}
          >
            <img
              src={WORKSHOP_HERO}
              alt="Industrial Workshop"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                transition: 'filter 0.7s ease',
              }}
              onMouseOver={(e) => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)')}
              onMouseOut={(e) => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%)')}
            />
          </div>
        </div>
      </header>

      {/* ── Stats Section ── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          border: '2px solid var(--rt-black)',
          marginBottom: 96,
        }}
      >
        <div
          style={{
            padding: 48,
            borderRight: '2px solid var(--rt-black)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--rt-black)',
              marginBottom: 8,
            }}
          >
            33+
          </span>
          <span className="caps" style={{ letterSpacing: '0.15em' }}>Years Experience</span>
        </div>
        <div
          style={{
            padding: 48,
            background: 'var(--rt-black)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 48,
              fontWeight: 700,
              color: 'var(--rt-white)',
              marginBottom: 8,
            }}
          >
            100%
          </span>
          <span className="caps" style={{ color: 'var(--rt-white)', letterSpacing: '0.15em' }}>Work Guarantee</span>
        </div>
      </section>

      {/* ── Main Content (Bento Style) ── */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
          marginBottom: 96,
        }}
      >
        {/* Story Card */}
        <div
          style={{
            gridColumn: 'span 8',
            border: '2px solid var(--rt-black)',
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 32,
                fontWeight: 700,
                color: 'var(--rt-black)',
                marginBottom: 24,
              }}
            >
              Built for Australia
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5d5e66', marginBottom: 24 }}>
              From mine spec to marine and everything in between, we focus on durability, function,
              and clean workmanship. We understand that in the Australian outback or on the rough WA
              coast, gear failure isn&apos;t just an inconvenience—it&apos;s a critical risk.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5d5e66' }}>
              Our workshop is equipped with industrial-grade machinery capable of handling
              heavy-weight PVC, canvas, and high-performance synthetics. Every stitch is placed with
              structural integrity in mind.
            </p>
          </div>
          <div
            style={{
              marginTop: 48,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span className="caps" style={{ fontWeight: 700 }}>CERTIFIED FABRICATION</span>
            <div style={{ flexGrow: 1, height: 1, background: 'var(--rt-black)' }} />
          </div>
        </div>

        {/* Image Card */}
        <div
          style={{
            gridColumn: 'span 4',
            border: '2px solid var(--rt-black)',
            overflow: 'hidden',
          }}
        >
          <img
            src={CRAFTSMANSHIP}
            alt="Craftsmanship detail"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Value Proposition Card */}
        <div
          style={{
            gridColumn: 'span 4',
            background: '#eeeeef',
            border: '2px solid var(--rt-black)',
            padding: 40,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 48, marginBottom: 24, display: 'block' }}>
            verified
          </span>
          <h3 className="caps" style={{ fontWeight: 700, marginBottom: 16 }}>No Compromise</h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#1a1c1d' }}>
            We reject off-the-shelf compromises. Every project is a custom fabrication using
            industrial-grade materials tailored to your specific operational needs.
          </p>
        </div>

        {/* Identity Card */}
        <div
          style={{
            gridColumn: 'span 8',
            border: '2px solid var(--rt-black)',
            padding: 40,
            display: 'flex',
            flexDirection: 'row',
            gap: 32,
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '0 0 50%' }}>
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 32,
                fontWeight: 700,
                color: 'var(--rt-black)',
                marginBottom: 16,
              }}
            >
              WA Owned &amp; Operated
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5d5e66' }}>
              Based in Western Australia, we are local specialists who know the conditions. Our
              reputation is built on decades of serving the community with honesty and technical
              precision.
            </p>
          </div>
          <div
            style={{
              flex: '0 0 50%',
              height: 192,
              border: '2px solid var(--rt-black)',
              overflow: 'hidden',
              filter: 'grayscale(100%) contrast(1.25)',
            }}
          >
            <img
              src={WORKSHOP_INTERIOR}
              alt="Workshop Interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section style={{ borderTop: '2px solid var(--rt-black)', paddingTop: 64, marginBottom: 96 }}>
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              color: 'var(--rt-black)',
            }}
          >
            Our Core Values
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            {
              num: '01',
              label: 'INTEGRITY',
              desc: 'Absolute transparency in material selection and construction methods. We do it right the first time.',
            },
            {
              num: '02',
              label: 'DURABILITY',
              desc: 'Designed to outlast the equipment it covers. We use UV-stabilized threads and reinforced stress points.',
            },
            {
              num: '03',
              label: 'PRECISION',
              desc: 'Millimeter-perfect fit for every vehicle, vessel, or industrial component we trim.',
            },
          ].map((val) => (
            <div key={val.num} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div
                className="caps"
                style={{
                  borderBottom: '2px solid var(--rt-black)',
                  paddingBottom: 8,
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 700,
                }}
              >
                <span>{val.num}</span>
                <span>{val.label}</span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5d5e66' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        style={{
          background: 'var(--rt-black)',
          color: 'var(--rt-white)',
          padding: '80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 'clamp(32px,4vw,48px)',
              fontWeight: 700,
              color: 'var(--rt-white)',
              marginBottom: 32,
            }}
          >
            Ready to start your project?
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: '#e2e2e2',
              marginBottom: 48,
              maxWidth: 480,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Contact us today for a technical consultation and quote on your next industrial or
            marine textile project.
          </p>
          <Link
            href="/contact"
            className="btn"
            style={{
              background: 'var(--rt-white)',
              color: 'var(--rt-black)',
              fontSize: 12,
              padding: '20px 40px',
              letterSpacing: '0.15em',
              boxShadow: '4px 4px 0 0 rgba(255,255,255,0.3)',
            }}
          >
            Request a Quote
          </Link>
        </div>
        {/* Decorative dot pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            pointerEvents: 'none',
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </section>

      <style>{`
        @media(max-width:900px) {
          main { padding-left:16px !important; padding-right:16px !important; }
          header[style*="grid-template-columns: 7fr"] { grid-template-columns:1fr !important; }
          section[style*="repeat(12"] { grid-template-columns:1fr !important; }
          section[style*="repeat(12"] > div { grid-column: span 1 !important; }
          section[style*="repeat(3, 1fr)"] { grid-template-columns:1fr !important; }
          section[style*="border-Right: 2px"] { flex-direction: column !important; }
        }
        @media(max-width:600px) {
          section[style*="grid-template-columns: 1fr 1fr"][style*="border: 2px"] { grid-template-columns:1fr !important; }
          section[style*="grid-template-columns: 1fr 1fr"][style*="border: 2px"] > div:first-child { border-right:none !important; border-bottom:2px solid var(--rt-black); }
        }
      `}</style>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
