import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'
import { HomeQuoteForm } from './HomeQuoteForm'

const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC1FGc_sSS27sCh9zHn4U9EKYmXCPGqusvaRuvljHtwH4xSXUS_ydGRs7yekJf8P2-gcICZD73Ien2gLYr3rKpqcddn4Jb0zR8_bwk1xFMrWhReCCYEpmFm9hMtCbG9f43eN62pciJGwmfnl3ys6kY84bOP9A8kVdfTKWG9I0BApUWZeEkkIDH-32BQVozwPzxfjti2qWp0RHL_OaZoXog0vrvkSjWBhiJI7tSSsTcHSspinge2_KKXFkwnunuomjlDq_GD4xw0-YTY'
const CRAFTSMAN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAH68DclwPpBqh5vfHvGETI9AnNqPxNbwP0cusfz42jFbekv_qW_ZRuLfZ4Ii5AWBo4yd4it-viY0BEpRQCCm85I1EuTQx8c6ApEx7DX2ac7iXNcz_WtfT3PPW0y8cZaDnwCCStp3H1qGLmLepfPU9Xb8lrC8C085-MO9IVpSQ1yX3ANsHz4umVgTVq3CMP94BCPZNsui-fm5d5YAT1pbL4a8INTCyxetYJa8lvHr2hP2SvhOR-K99E_X5JXn98IZ82iYITqlUXIGja'
const MARINE_SVC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC773KiEyz05ggx0RcnwZEOZGcireHUMVTRsQSuSp3qfyRsonamvK7cF5qvDqXmgJLGHZfGNp4JKiKO56mhsIovukmh6ltIxY7AIzz0ZNOQ2Z910WjgtGKSSGSzNWwmlktK9_M66abPZqF4tuWOWjtCmEeuZgyvuE1GQic5QuRJOFm--J8EjEkx8buGeCyP30qXszP6-96eP05yvRI7hfKR_DUwpro62VEADmnckAAjN-BKg4rXm4z2I_cvPbNs3kAXXOB28L4T7inj'
const CUSTOM_SVC =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPLQg3nVe5EPN3diXHtXyJfRXtu4FkKXDkscH1i1sA_1-p620W5bnE1S240WE3GQK_uNqlbZNmYHVYbTsN1-v-dUd1O8KyYmI0KCRCFaj3_xQJ-DswlTkrIGzCvN90Ni0aPuv1XS_pXD7k0UMxgIDw2aFMD4f-jLJivkuScCJrXqinB-YRG8v9-23n8dWcrAXKPwqwoP43lvMNS3101KUsVVpz85ozwruw3Wm97M521cW_PLzoItXC7haJ6oAQyZU2tiele9jDhg5f'
const CLOSING =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBOwsH3faYsqe_QJyHIVOLOFi7QmLKfSmj71ljR3BhaNxrYnojVtj_vXs6zb-85ydGk0ENqLNbRThQh0X2gXZo2nCAfTBmk4u0J8a6bgk-AIQfx3LnCJvIdHshWEAzIrdyrEpW7hzH6ERNWjSrYfejY1JwDm55KdRI2erOTVw4AbhJF3ZfBeZ9IF9sCIccH1ZCjYxef6MR0pDwQ2Y9W6hg7KeF6d0Rhgkpgu81Ew7cew_2ECSXNM0Tp5RN2k4QOJHwT7-YGaXXgCXYZ'

const DEFAULT_WHY_ITEMS = [
  { icon: 'thunderstorm', label: 'Built for harsh Australian conditions' },
  { icon: 'manufacturing', label: 'Industrial-grade materials' },
  { icon: 'design_services', label: 'Custom fabrication – no off-the-shelf compromises' },
  { icon: 'handshake', label: 'Reliable turnaround & honest service' },
  { icon: 'location_on', label: 'WA owned & operated' },
]

const DEFAULT_SERVICES = [
  { id: 'marine', icon: 'directions_boat', title: 'Marine Trimming', imageUrl: MARINE_SVC },
  { id: 'industrial', icon: 'factory', title: 'Industrial Textiles', imageUrl: CRAFTSMAN },
  { id: 'custom', icon: 'check_box_outline_blank', title: 'Custom Covers', imageUrl: CUSTOM_SVC },
]

export default async function HomePage() {
  let cms: any = {}
  let servicesFromDb: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    cms = await payload.findGlobal({ slug: 'homepage-content', depth: 1 })
    const result = await payload.find({ collection: 'services', sort: 'order', limit: 3, depth: 1 })
    servicesFromDb = result.docs
  } catch {}

  const heroTagline = cms.hero?.tagline || 'Marine & Motor Trimming Specialist'
  const heroHeading = cms.hero?.heading || 'Built Tough. Made to Last.'
  const heroSubtext =
    cms.hero?.subtext ||
    'Custom trimming solutions specialising in industrial, marine & heavy-duty textile fabrication across Western Australia.'
  const heroBg = (cms.hero?.image as any)?.url || HERO_BG

  const aboutBadge = cms.about?.badge || 'Est. 2017'
  const aboutHeading = cms.about?.heading || 'About RAMS TRIMMING'
  const aboutDescription =
    cms.about?.description ||
    'At RAMS TRIMMING, we build hard-wearing, fit-for-purpose textile solutions designed to handle the harshest environments Australia can throw at them. From mine spec to marine and everything in between, we focus on durability, function, and clean workmanship.'
  const stat1Number = cms.about?.stat1Number || '33+'
  const stat1Label = cms.about?.stat1Label || 'Years Experience'
  const stat2Number = cms.about?.stat2Number || '100%'
  const stat2Label = cms.about?.stat2Label || 'Work Guarantee'
  const aboutImage = (cms.about?.image as any)?.url || CRAFTSMAN

  const servicesHeading = cms.services?.heading || 'What We Do'

  const whyHeading = cms.whyChoose?.heading || 'Why Choose Rams?'
  const whyItems =
    cms.whyChoose?.items && cms.whyChoose.items.length > 0
      ? cms.whyChoose.items
      : DEFAULT_WHY_ITEMS

  const quoteHeading = cms.quoteForm?.heading || 'Request a Quote'
  const quoteSubtext =
    cms.quoteForm?.subtext ||
    'Describe your requirements and we will provide a professional assessment within 24 hours.'

  const closingHeading = cms.closing?.heading || 'Precision on the Waves.'
  const closingCaption = cms.closing?.caption || 'CRAFTED FOR EXCELLENCE'
  const closingImage = (cms.closing?.image as any)?.url || CLOSING

  const services =
    servicesFromDb.length > 0
      ? servicesFromDb.map((s) => ({
          id: s.id,
          icon: s.icon || 'design_services',
          title: s.title,
          imageUrl: (s.image as any)?.url || MARINE_SVC,
        }))
      : DEFAULT_SERVICES

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
          src={heroBg}
          alt="A luxurious white power yacht speeds through deep blue ocean waters."
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="hero-gradient" style={{ position: 'absolute', inset: 0 }} />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: 'var(--rt-white)',
            padding: '0 24px',
            maxWidth: 900,
          }}
        >
          <span
            className="caps"
            style={{
              background: 'var(--rt-black)',
              color: 'var(--rt-white)',
              padding: '4px 16px',
              display: 'inline-block',
              marginBottom: 24,
            }}
          >
            {heroTagline}
          </span>
          <AnimatedHeading
            as="h1"
            delay={0.2}
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 'clamp(40px,6vw,64px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 24,
              justifyContent: 'center',
            }}
          >
            {heroHeading}
          </AnimatedHeading>
          <AnimatedText
            delay={0.5}
            style={{
              fontSize: 'clamp(16px,2vw,18px)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 40,
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {heroSubtext}
          </AnimatedText>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: 13 }}>
              Request a Quote
            </Link>
            <Link href="/services" className="btn btn-outline" style={{ fontSize: 13 }}>
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* ── Expertise / About Section ── */}
      <section
        id="expertise"
        style={{ padding: 'var(--rt-section-gap) 40px', background: 'var(--rt-surface)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <div style={{ height: 2, width: 96, background: 'var(--rt-black)' }} />
            <span className="caps" style={{ color: 'var(--rt-black)' }}>{aboutBadge}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 24, alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AnimatedHeading
                as="h2"
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 'clamp(32px,4vw,48px)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: 24,
                  color: 'var(--rt-black)',
                }}
              >
                {aboutHeading}
              </AnimatedHeading>
              <AnimatedText style={{ fontSize: 18, lineHeight: 1.6, color: '#4c4546', marginBottom: 32 }}>
                {aboutDescription}
              </AnimatedText>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 32,
                      fontWeight: 700,
                      color: 'var(--rt-black)',
                      marginBottom: 8,
                    }}
                  >
                    {stat1Number}
                  </h4>
                  <p className="caps" style={{ color: '#5d5e66' }}>{stat1Label}</p>
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 32,
                      fontWeight: 700,
                      color: 'var(--rt-black)',
                      marginBottom: 8,
                    }}
                  >
                    {stat2Number}
                  </h4>
                  <p className="caps" style={{ color: '#5d5e66' }}>{stat2Label}</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src={aboutImage}
                alt="Close up high-fidelity shot of a master craftsman hand-stitching premium leather."
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: -24,
                  left: -24,
                  background: 'var(--rt-black)',
                  padding: '32px',
                  display: 'none',
                }}
                className="about-badge"
              >
                <span className="caps" style={{ color: '#f3f3f4' }}>Marine Grade</span>
                <p
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--rt-white)',
                    marginTop: 8,
                  }}
                >
                  Built to Last.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media(min-width:1024px) { .about-badge { display: block !important; } }
          @media(max-width:768px) {
            #expertise { padding-left:16px !important; padding-right:16px !important; }
            #expertise > div > div[style*="7fr"] { grid-template-columns:1fr !important; gap:40px !important; }
          }
        `}</style>
      </section>

      {/* ── Services Section ── */}
      <section
        id="services"
        style={{ padding: 'var(--rt-section-gap) 40px', background: 'var(--rt-white)' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="title-underline">
            <AnimatedHeading as="h2">{servicesHeading}</AnimatedHeading>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {services.map((svc) => (
              <div key={svc.id}>
                <div
                  style={{
                    overflow: 'hidden',
                    marginBottom: 32,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid #e2e2e3',
                  }}
                >
                  <img
                    src={svc.imageUrl}
                    alt={svc.title}
                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--rt-black)' }}>
                    {svc.icon}
                  </span>
                  <AnimatedHeading
                    as="h3"
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 24,
                      fontWeight: 700,
                      color: 'var(--rt-black)',
                    }}
                  >
                    {svc.title}
                  </AnimatedHeading>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:768px) {
            #services { padding-left:16px !important; padding-right:16px !important; }
            #services > div > div[style*="repeat(3"] { grid-template-columns:1fr !important; }
          }
        `}</style>
      </section>

      {/* ── Why Choose + Quote Form (client component handles both columns) ── */}
      <HomeQuoteForm
        whyHeading={whyHeading}
        whyItems={whyItems}
        quoteHeading={quoteHeading}
        quoteSubtext={quoteSubtext}
      />

      {/* ── Closing Atmospheric Section ── */}
      <section
        style={{
          height: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={closingImage}
          alt="A luxurious white power yacht speeds through deep blue ocean waters."
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(1px)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div
            style={{
              padding: '48px 64px',
              border: '2px solid rgba(255,255,255,0.3)',
              maxWidth: 680,
              backdropFilter: 'blur(8px)',
            }}
          >
            <AnimatedHeading
              as="h2"
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 'clamp(32px,5vw,48px)',
                color: 'var(--rt-white)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 16,
                justifyContent: 'center',
              }}
            >
              {closingHeading}
            </AnimatedHeading>
            <p className="caps" style={{ color: '#f3f3f4', letterSpacing: '0.2em' }}>
              {closingCaption}
            </p>
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
