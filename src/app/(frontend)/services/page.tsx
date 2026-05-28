import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'

const SERVICES_HERO = '/images/marine-2.jpg'
const MARINE_MAIN = '/images/marine-5.jpg'
const MARINE_SIDE = '/images/marine-3.jpg'
const MINING_IMG = '/images/industrial-1.jpg'
const CANOPY_IMG = '/images/covers-2.jpg'
const TRAILER_IMG = '/images/hero.jpg'
const HEADLINING_IMG = '/images/covers-3.jpg'

export default async function ServicesPage() {
  let cms: any = {}

  try {
    const payload = await getPayload({ config: configPromise })
    cms = await payload.findGlobal({ slug: 'services-content', depth: 1 })
  } catch {}

  const heroHeading = cms.hero?.heading || 'Precision Craftsmanship'
  const heroSubtext =
    cms.hero?.subtext ||
    'Expert marine, motor, and industrial trimming. Delivering professional-grade durability since 1987.'
  const heroBg = (cms.hero?.image as any)?.url || SERVICES_HERO

  // Section headers — fall back to hardcoded defaults
  const sections = cms.sections && cms.sections.length >= 4
    ? cms.sections
    : [
        { number: '01.', heading: 'Marine Trimming', accent: 'WATERPROOF EXCELLENCE' },
        { number: '02.', heading: 'Industrial Textiles', accent: 'HEAVY DUTY SOLUTIONS' },
        { number: '03.', heading: 'Custom Covers', accent: 'BESPOKE PROTECTION' },
        { number: '04.', heading: 'Motor Trimming', accent: 'AUTOMOTIVE CRAFT' },
      ]

  const ctaHeading = cms.cta?.heading || 'Ready to start your project?'
  const ctaSubtext =
    cms.cta?.subtext ||
    "Whether it's a luxury yacht, industrial equipment, or custom outdoor protection, we bring the same level of industrial expertise."
  const ctaPhone = cms.cta?.phone || '08 9581 8180'
  const ctaLocation = cms.cta?.location || '6C Harlem Place, Greenfields'

  return (
    <main>
      {/* ── Hero Header ── */}
      <header
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: 380,
          display: 'flex',
          alignItems: 'center',
          paddingTop: 96,
          overflow: 'hidden',
          marginTop: 'var(--rt-nav-h)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1 }}
          />
          <img
            src={heroBg}
            alt="Marine and motor trimming craftsmanship"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 64px' }}>
          <div
            style={{
              background: 'rgba(0,0,0,0.9)',
              padding: 40,
              maxWidth: 560,
              borderLeft: '8px solid #7e7576',
            }}
          >
            <AnimatedHeading
              as="h1"
              delay={0.2}
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 700,
                color: 'var(--rt-white)',
                marginBottom: 16,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              {heroHeading}
            </AnimatedHeading>
            <AnimatedText delay={0.45} style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
              {heroSubtext}
            </AnimatedText>
          </div>
        </div>
      </header>

      {/* ── 01. Marine Trimming ── */}
      <section id="marine" style={{ padding: 'var(--rt-section-gap) 64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <AnimatedHeading
            as="h2"
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            {`${sections[0]?.number} ${sections[0]?.heading}`}
          </AnimatedHeading>
          <div style={{ flexGrow: 1, height: 4, background: 'var(--rt-black)' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            {sections[0]?.accent}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '8fr 4fr', gap: 24 }}>
          <div style={{ background: '#eeeeef', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <img
              src={MARINE_MAIN}
              alt="Marine trimming project"
              className="svc-img-zoom"
              style={{ width: '100%', height: 400, objectFit: 'cover', transition: 'transform 0.7s' }}
            />
            <div style={{ padding: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <span className="caps" style={{ color: '#7e7576' }}>MARINE SERVICES</span>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'rgba(0,0,0,0.15)' }}>
                  directions_boat
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                <div>
                  <AnimatedHeading as="h3" style={{ fontFamily: 'var(--rt-font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                    Boat Covers
                  </AnimatedHeading>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {['UV-resistant materials', 'Weatherproof construction', 'Trailerable options available', 'Built to handle WA conditions'].map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#5d5e66' }}>
                        <span style={{ display: 'inline-block', width: 6, height: 6, background: '#7e7576', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <AnimatedHeading as="h3" style={{ fontFamily: 'var(--rt-font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                    Boat Upholstery
                  </AnimatedHeading>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {['Foam replacement & seat rebuilds', 'Marine vinyl finishes', 'Custom designs', 'Clean professional finish'].map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#5d5e66' }}>
                        <span style={{ display: 'inline-block', width: 6, height: 6, background: '#7e7576', flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              background: 'var(--rt-black)',
              color: 'var(--rt-white)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderBottom: '8px solid #7e7576',
            }}
          >
            <div style={{ overflow: 'hidden', marginBottom: 24 }}>
              <img
                src={MARINE_SIDE}
                alt="Marine Upholstery"
                style={{ width: '100%', height: 192, objectFit: 'cover', marginBottom: 24 }}
              />
              <AnimatedHeading
                as="h3"
                style={{ fontFamily: 'var(--rt-font-display)', fontSize: 24, fontWeight: 700, marginBottom: 16 }}
              >
                Bimini Tops
              </AnimatedHeading>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, opacity: 0.9 }}>
                {['Strong stainless or alloy frames', 'UV-stable fabrics', 'Built for strength and longevity', 'Custom sizing for perfect fit'].map(
                  (item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span
                        style={{ display: 'inline-block', width: 6, height: 6, background: '#7e7576', flexShrink: 0 }}
                      />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <button
              style={{
                alignSelf: 'flex-start',
                background: 'none',
                border: 'none',
                borderBottom: '2px solid var(--rt-white)',
                color: 'var(--rt-white)',
                cursor: 'pointer',
                fontFamily: 'var(--rt-font-mono)',
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                padding: '4px 0',
              }}
            >
              VIEW MARINE GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* ── 02. Industrial Textiles ── */}
      <section id="industrial" style={{ padding: '80px 64px', background: '#f3f3f4' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <AnimatedHeading
            as="h2"
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            {`${sections[1]?.number} ${sections[1]?.heading}`}
          </AnimatedHeading>
          <div style={{ flexGrow: 1, height: 4, background: 'var(--rt-black)' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            {sections[1]?.accent}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}>
          <div
            style={{
              background: 'var(--rt-black)',
              color: 'var(--rt-white)',
              padding: 40,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <AnimatedHeading
              as="h3"
              style={{ fontFamily: 'var(--rt-font-display)', fontSize: 30, fontWeight: 700, marginBottom: 24 }}
            >
              Built for Performance
            </AnimatedHeading>
            <AnimatedText style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 32, lineHeight: 1.7 }}>
              Our industrial solutions are engineered to withstand the toughest conditions, from
              mining sites to large-scale agricultural operations.
            </AnimatedText>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: 'engineering', label: 'Reinforced Stitching' },
                { icon: 'shield', label: 'UV & Tear Resistant' },
              ].map((item) => (
                <div key={item.icon} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span
                    style={{
                      padding: 8,
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </span>
                  <span className="caps" style={{ color: 'var(--rt-white)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div
              style={{
                background: 'var(--rt-white)',
                padding: 32,
                borderTop: '4px solid #7e7576',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <img src={MINING_IMG} alt="Mining Solutions" style={{ width: '100%', height: 160, objectFit: 'cover', marginBottom: 24 }} />
              <AnimatedHeading
                as="h4"
                style={{ fontFamily: 'var(--rt-font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16 }}
              >
                Mining &amp; Ag Solutions
              </AnimatedHeading>
              <AnimatedText style={{ color: '#5d5e66', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Specialized protective covers and barriers for heavy machinery and site infrastructure.
              </AnimatedText>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Mining Solutions
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Agricultural Solutions
                </li>
              </ul>
            </div>
            <div
              style={{
                background: 'var(--rt-white)',
                padding: 32,
                borderTop: '4px solid var(--rt-black)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <AnimatedHeading
                as="h4"
                style={{ fontFamily: 'var(--rt-font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16 }}
              >
                Equipment Protection
              </AnimatedHeading>
              <AnimatedText style={{ color: '#5d5e66', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Custom-fit protection for high-value industrial equipment and logistics.
              </AnimatedText>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600, marginBottom: 24 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Equipment Covers
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Heavy Duty Tarps
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> PVC Covers
                </li>
              </ul>
              <img src={CANOPY_IMG} alt="Large Canopy" style={{ width: '100%', height: 160, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Custom Covers ── */}
      <section id="custom-covers" style={{ padding: 'var(--rt-section-gap) 64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <AnimatedHeading
            as="h2"
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            {`${sections[2]?.number} ${sections[2]?.heading}`}
          </AnimatedHeading>
          <div style={{ flexGrow: 1, height: 4, background: 'var(--rt-black)' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            {sections[2]?.accent}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          <div style={{ background: '#eeeeef', padding: 32, display: 'flex', flexDirection: 'column' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#7e7576', marginBottom: 16, display: 'block' }}>
              home_repair_service
            </span>
            <AnimatedHeading
              as="h3"
              style={{ fontFamily: 'var(--rt-font-display)', fontSize: 24, fontWeight: 700, marginBottom: 16 }}
            >
              Outdoor &amp; Travel
            </AnimatedHeading>
            <AnimatedText style={{ color: '#5d5e66', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
              Bespoke covers designed to protect your lifestyle investments from the elements.
            </AnimatedText>
            <div style={{ marginTop: 'auto', paddingTop: 24 }}>
              <img src={TRAILER_IMG} alt="Trailer Cover" style={{ width: '100%', height: 128, objectFit: 'cover' }} />
            </div>
          </div>
          {[
            { num: '01', title: 'Outdoor Furniture', desc: 'Tailored covers for all types of outdoor dining and lounge sets using waterproof fabrics.' },
            { num: '02', title: 'Caravan Drawbar', desc: 'High-durability protection for caravan towing hardware and exposed front elements.' },
            { num: '03', title: 'Storage Bags', desc: 'Custom-sized, reinforced storage bags for tools, gear, and specialized equipment.' },
          ].map((item) => (
            <div key={item.num} className="custom-cover-card" style={{ background: '#eeeeef', padding: 32, borderBottom: '4px solid transparent', transition: 'border-color 0.2s' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: 'var(--rt-black)',
                  color: 'var(--rt-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                  fontFamily: 'var(--rt-font-mono)',
                  fontWeight: 600,
                }}
              >
                {item.num}
              </div>
              <AnimatedHeading as="h4" style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
                {item.title}
              </AnimatedHeading>
              <AnimatedText style={{ fontSize: 14, color: '#5d5e66', lineHeight: 1.6 }}>
                {item.desc}
              </AnimatedText>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04. Motor Trimming ── */}
      <section id="motor" style={{ padding: '80px 64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <AnimatedHeading
            as="h2"
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            {`${sections[3]?.number} ${sections[3]?.heading}`}
          </AnimatedHeading>
          <div style={{ flexGrow: 1, height: 4, background: '#7e7576' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            {sections[3]?.accent}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { img: HEADLINING_IMG, tag: 'INTERIOR RESTORATION', title: 'Head Linings', desc: 'Sagging or damaged roof linings replaced with factory-matched or custom materials.', detail: 'PRECISION FIT' },
            { img: TRAILER_IMG, tag: 'UTILITY SOLUTIONS', title: 'Ute Canvas Covers', desc: 'Custom-made heavy-duty canvas covers for utilities and trailers. Reinforced for extreme durability.', detail: 'WEATHER-SHIELD' },
            { img: MARINE_SIDE, tag: 'REPAIRS & PANELS', title: 'Seat & Door Repairs', desc: 'Expert repair, re-cover, and re-bolster of car seats. Specialized door panel trimming.', detail: 'LUXURY COMFORT' },
          ].map((svc) => (
            <div key={svc.title} style={{ background: 'var(--rt-white)' }} className="motor-card">
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  style={{ width: '100%', height: 256, objectFit: 'cover', transition: 'all 0.5s' }}
                />
              </div>
              <div
                style={{
                  padding: 24,
                  borderLeft: '2px solid transparent',
                  borderRight: '2px solid transparent',
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s',
                }}
                className="motor-card-inner"
              >
                <h4 className="caps" style={{ color: 'var(--rt-black)', marginBottom: 8 }}>{svc.tag}</h4>
                <AnimatedHeading
                  as="h3"
                  style={{ fontFamily: 'var(--rt-font-display)', fontSize: 24, fontWeight: 700, marginBottom: 16 }}
                >
                  {svc.title}
                </AnimatedHeading>
                <AnimatedText style={{ color: '#5d5e66', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
                  {svc.desc}
                </AnimatedText>
                <hr style={{ borderTop: '2px solid #e8e8e9', marginBottom: 16 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="caps" style={{ color: 'var(--rt-black)', fontSize: 10 }}>{svc.detail}</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote CTA ── */}
      <section style={{ padding: '0 64px 80px' }}>
        <div
          style={{
            background: 'var(--rt-black)',
            color: 'var(--rt-white)',
            padding: '80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: 40,
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 200, fontVariationSettings: "'FILL' 1" }}>
              straighten
            </span>
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div>
              <AnimatedHeading
                as="h2"
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 'clamp(32px,4vw,48px)',
                  fontWeight: 700,
                  marginBottom: 24,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                {ctaHeading}
              </AnimatedHeading>
              <AnimatedText style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32, maxWidth: 440, lineHeight: 1.6 }}>
                {ctaSubtext}
              </AnimatedText>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  className="btn"
                  style={{
                    background: 'var(--rt-white)',
                    color: 'var(--rt-black)',
                    fontSize: 12,
                    borderBottom: '4px solid rgba(0,0,0,0.3)',
                  }}
                >
                  REQUEST A CALL
                </Link>
                <Link href="/portfolio" className="btn btn-outline" style={{ fontSize: 12 }}>
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: 24, borderLeft: '4px solid #7e7576' }}>
                <h4 className="caps" style={{ color: '#7e7576', marginBottom: 4 }}>DIRECT CONTACT</h4>
                <p style={{ fontSize: 24, fontWeight: 700 }}>{ctaPhone}</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: 24, borderLeft: '4px solid #7e7576' }}>
                <h4 className="caps" style={{ color: '#7e7576', marginBottom: 4 }}>WORKSHOP LOCATION</h4>
                <p style={{ fontSize: 24, fontWeight: 700 }}>{ctaLocation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .svc-img-zoom:hover { transform: scale(1.05); }
        .custom-cover-card:hover { border-bottom-color: #7e7576 !important; }
        .motor-card:hover .motor-card-inner { border-color: var(--rt-black) !important; }
        @media(max-width:1024px) {
          #marine > div:last-child { grid-template-columns: 1fr !important; }
          #industrial > div:last-child { grid-template-columns: 1fr !important; }
          #custom-covers > div:last-child { grid-template-columns: 1fr 1fr !important; }
          #motor > div:last-child { grid-template-columns: 1fr 1fr !important; }
          section:last-of-type > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media(max-width:768px) {
          header { padding: 0 16px !important; }
          #marine, #custom-covers, #motor, #industrial { padding-left:16px !important; padding-right:16px !important; }
          section:last-of-type { padding-left:16px !important; padding-right:16px !important; }
          section:last-of-type > div { padding:40px 16px !important; }
          #custom-covers > div:last-child { grid-template-columns: 1fr !important; }
          #motor > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
