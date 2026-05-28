import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'

const SERVICES_HERO = '/images/marine-2.jpg'
const MARINE_A = '/images/marine-5.jpg'
const MARINE_B = '/images/marine-3.jpg'
const INDUSTRIAL_A = '/images/industrial-1.jpg'
const INDUSTRIAL_B = '/images/covers-2.jpg'
const COVERS_A = '/images/hero.jpg'
const COVERS_B = '/images/covers-1.jpg'
const MOTOR_A = '/images/covers-3.jpg'
const MOTOR_B = '/images/marine-4.jpg'

const SECTION_DEFAULTS = [
  {
    id: 'marine',
    number: '01.', heading: 'Marine Trimming', accent: 'WATERPROOF EXCELLENCE',
    darkCard: { heading: 'Built for Marine', description: "Professional-grade upholstery, covers, and enclosures engineered for WA's harshest waterways.", badge1Icon: 'directions_boat', badge1Label: 'Waterproof Materials', badge2Icon: 'sailing', badge2Label: 'UV Resistant' },
    card1: { heading: 'Boat Covers & Upholstery', description: 'Custom marine upholstery and tailored covers using high-grade UV-resistant materials and marine-grade foams.', items: 'UV-resistant materials\nWeatherproof construction\nFoam replacement & seat rebuilds\nMarine vinyl finishes\nCustom designs available', image: MARINE_A },
    card2: { heading: 'Bimini Tops & Clears', description: 'Structural bimini frames and heavy-duty marine enclosures for visibility and year-round weather protection.', items: 'Strong stainless or alloy frames\nUV-stable fabrics\nHigh-quality clear PVC\nZips, roll-ups & ventilation\nCustom sizing for perfect fit', image: MARINE_B },
  },
  {
    id: 'industrial',
    number: '02.', heading: 'Industrial Textiles', accent: 'HEAVY DUTY SOLUTIONS',
    darkCard: { heading: 'Built for Performance', description: 'Our industrial solutions are engineered to withstand the toughest conditions, from mining sites to large-scale agricultural operations.', badge1Icon: 'engineering', badge1Label: 'Reinforced Stitching', badge2Icon: 'shield', badge2Label: 'UV & Tear Resistant' },
    card1: { heading: 'Mining & Ag Solutions', description: 'Specialized protective covers and barriers for heavy machinery and site infrastructure.', items: 'Mining Solutions\nAgricultural Solutions\nHeavy-duty PVC & canvas\nMine-spec quality guaranteed', image: INDUSTRIAL_A },
    card2: { heading: 'Equipment Protection', description: 'Custom-fit protection for high-value industrial equipment and logistics.', items: 'Equipment Covers\nHeavy Duty Tarps\nPVC Covers\nReinforced construction', image: INDUSTRIAL_B },
  },
  {
    id: 'custom-covers',
    number: '03.', heading: 'Custom Covers', accent: 'BESPOKE PROTECTION',
    darkCard: { heading: 'Bespoke Protection', description: 'Precision-made covers for every environment, built to protect your most valuable assets from the WA elements.', badge1Icon: 'deployed_code', badge1Label: 'Custom Fit', badge2Icon: 'wb_sunny', badge2Label: 'Weather Resistant' },
    card1: { heading: 'Outdoor & Travel', description: 'Bespoke covers designed to protect your lifestyle investments from the WA elements.', items: 'Boat & caravan covers\nOutdoor furniture covers\nUV & waterproof fabrics\nCustom sizing available', image: COVERS_A },
    card2: { heading: 'Caravan & Storage', description: 'Heavy-duty drawbar covers, storage bags, and tailored protective solutions for every need.', items: 'Caravan drawbar covers\nReinforced storage bags\nHeavy-duty PVC & canvas\nPrecision custom fit', image: COVERS_B },
  },
  {
    id: 'motor',
    number: '04.', heading: 'Motor Trimming', accent: 'AUTOMOTIVE CRAFT',
    darkCard: { heading: 'Automotive Craft', description: 'Interior restoration and custom upholstery for cars, utes, and 4WDs using premium leather, vinyl, and fabric.', badge1Icon: 'directions_car', badge1Label: 'Interior Restoration', badge2Icon: 'construction', badge2Label: 'Heavy Duty' },
    card1: { heading: 'Head Linings & Seats', description: 'Factory-matched or custom headlining replacements and full seat re-cover and restoration.', items: 'Sagging headlining repairs\nSeat re-cover & re-bolster\nDoor panel trimming\nLeather & vinyl options', image: MOTOR_A },
    card2: { heading: 'Ute Canvas & Panels', description: 'Custom canvas covers for utility vehicles and door panel repairs with precision fit and finish.', items: 'Heavy-duty canvas ute covers\nWeather-sealed construction\nDoor panel repairs\nCustom finishes available', image: MOTOR_B },
  },
]

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

  const cmsSections = cms.sections && cms.sections.length >= 4 ? cms.sections : []
  const sections = SECTION_DEFAULTS.map((def, i) => {
    const c: any = cmsSections[i] || {}
    const dc = c.darkCard || {}
    const c1 = c.card1 || {}
    const c2 = c.card2 || {}
    return {
      id: def.id,
      number: c.number || def.number,
      heading: c.heading || def.heading,
      accent: c.accent || def.accent,
      darkCard: {
        heading: dc.heading || def.darkCard.heading,
        description: dc.description || def.darkCard.description,
        badge1Icon: dc.badge1Icon || def.darkCard.badge1Icon,
        badge1Label: dc.badge1Label || def.darkCard.badge1Label,
        badge2Icon: dc.badge2Icon || def.darkCard.badge2Icon,
        badge2Label: dc.badge2Label || def.darkCard.badge2Label,
      },
      card1: {
        heading: c1.heading || def.card1.heading,
        description: c1.description || def.card1.description,
        items: (c1.items || def.card1.items).split('\n').filter(Boolean),
        image: def.card1.image,
      },
      card2: {
        heading: c2.heading || def.card2.heading,
        description: c2.description || def.card2.description,
        items: (c2.items || def.card2.items).split('\n').filter(Boolean),
        image: def.card2.image,
      },
    }
  })

  const ctaHeading = cms.cta?.heading || 'Ready to start your project?'
  const ctaSubtext =
    cms.cta?.subtext ||
    "Whether it's a luxury yacht, industrial equipment, or custom outdoor protection, we bring the same level of industrial expertise."
  const ctaPhone = cms.cta?.phone || '0435 929 441'
  const ctaLocation = cms.cta?.location || 'Fremantle, WA 6160'

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

      {/* ── Service Sections ── */}
      {sections.map((section, i) => {
        const sectionBg = i % 2 === 0 ? 'var(--rt-white)' : '#f3f3f4'
        const cardBg = i % 2 === 0 ? '#eeeeef' : 'var(--rt-white)'

        return (
          <section
            key={section.id}
            id={section.id}
            style={{ padding: '80px 64px', background: sectionBg }}
          >
            {/* Section header */}
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
                {`${section.number} ${section.heading}`}
              </AnimatedHeading>
              <div style={{ flexGrow: 1, height: 4, background: 'var(--rt-black)' }} />
              <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
                {section.accent}
              </span>
            </div>

            {/* 3-column grid: 1fr dark card | 2fr (1fr 1fr) white cards */}
            <div
              className="svc-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}
            >
              {/* Dark left card */}
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
                  {section.darkCard.heading}
                </AnimatedHeading>
                <AnimatedText style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 32, lineHeight: 1.7 }}>
                  {section.darkCard.description}
                </AnimatedText>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { icon: section.darkCard.badge1Icon, label: section.darkCard.badge1Label },
                    { icon: section.darkCard.badge2Icon, label: section.darkCard.badge2Label },
                  ].map((badge) => (
                    <div key={badge.icon} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
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
                        <span className="material-symbols-outlined">{badge.icon}</span>
                      </span>
                      <span className="caps" style={{ color: 'var(--rt-white)' }}>{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two white cards */}
              <div
                className="svc-cards"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
              >
                {/* Card 1 — image on top */}
                <div
                  style={{
                    background: cardBg,
                    padding: 32,
                    borderTop: '4px solid #7e7576',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <img
                    src={section.card1.image}
                    alt={section.card1.heading}
                    style={{ width: '100%', height: 160, objectFit: 'cover', marginBottom: 24 }}
                  />
                  <AnimatedHeading
                    as="h4"
                    style={{ fontFamily: 'var(--rt-font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16 }}
                  >
                    {section.card1.heading}
                  </AnimatedHeading>
                  <AnimatedText style={{ color: '#5d5e66', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                    {section.card1.description}
                  </AnimatedText>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                    {section.card1.items.map((item: string) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: 'var(--rt-black)' }}>→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 2 — image on bottom */}
                <div
                  style={{
                    background: cardBg,
                    padding: 32,
                    borderTop: '4px solid var(--rt-black)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <AnimatedHeading
                    as="h4"
                    style={{ fontFamily: 'var(--rt-font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16 }}
                  >
                    {section.card2.heading}
                  </AnimatedHeading>
                  <AnimatedText style={{ color: '#5d5e66', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                    {section.card2.description}
                  </AnimatedText>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600, marginBottom: 24 }}>
                    {section.card2.items.map((item: string) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: 'var(--rt-black)' }}>→</span> {item}
                      </li>
                    ))}
                  </ul>
                  <img
                    src={section.card2.image}
                    alt={section.card2.heading}
                    style={{ width: '100%', height: 160, objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </section>
        )
      })}

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
        @media(max-width:1024px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-cards { grid-template-columns: 1fr !important; }
        }
        @media(max-width:768px) {
          header { padding: 0 16px !important; }
          section { padding-left: 16px !important; padding-right: 16px !important; }
          section:last-of-type > div { padding: 40px 16px !important; }
          section:last-of-type > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
