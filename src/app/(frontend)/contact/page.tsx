import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'
import { ContactForm } from './ContactForm'

const CONTACT_HERO = '/images/marine-1.jpg'

const DEFAULT_HOURS = [
  { day: 'Monday - Friday', time: '8:00 AM - 4:00 PM' },
  { day: 'Saturday', time: 'By Appointment' },
  { day: 'Sunday', time: 'Closed' },
]

export default async function ContactPage() {
  let cms: any = {}

  try {
    const payload = await getPayload({ config: configPromise })
    cms = await payload.findGlobal({ slug: 'contact-content', depth: 1 })
  } catch {}

  const heroHeading = cms.hero?.heading || 'Contact Our Workshop'
  const heroSubtext =
    cms.hero?.subtext ||
    "Expert marine and motor trimming in Perth. Let's discuss your custom project, from luxury yacht interiors to vintage vehicle restorations."
  const heroBg = (cms.hero?.image as any)?.url || CONTACT_HERO

  const address = cms.info?.address || 'Fremantle, WA 6160'
  const phone = cms.info?.phone || '0435 929 441'
  const email = cms.info?.email || 'rhys@ramstrimming.com.au'
  const hours =
    cms.info?.hours && cms.info.hours.length > 0 ? cms.info.hours : DEFAULT_HOURS

  const formHeading = cms.form?.heading || 'Request a Quote'
  const formSubtext =
    cms.form?.subtext ||
    'Tell us about your project requirements for a detailed professional estimate.'

  const phoneHref = `tel:${phone.replace(/[^0-9]/g, '')}`

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
            src={heroBg}
            alt="Premium marine upholstery with impeccable stitching."
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
            {heroHeading}
          </AnimatedHeading>
          <div style={{ height: 4, width: 96, background: 'var(--rt-white)', marginBottom: 24 }} />
          <AnimatedText delay={0.45} style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.9 }}>
            {heroSubtext}
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
                  <p style={{ fontFamily: 'var(--rt-font-display)', fontSize: 18, fontWeight: 700, color: 'var(--rt-black)' }}>
                    {address}
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
                    href={phoneHref}
                    style={{ fontFamily: 'var(--rt-font-display)', fontSize: 18, fontWeight: 700, color: 'var(--rt-black)' }}
                  >
                    {phone}
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
                    href={`mailto:${email}`}
                    style={{ fontFamily: 'var(--rt-font-display)', fontSize: 17, fontWeight: 700, color: 'var(--rt-black)' }}
                  >
                    {email}
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
              {hours.map((h: any, i: number) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: i < hours.length - 1 ? '1px solid #cfc4c5' : undefined,
                    paddingBottom: i < hours.length - 1 ? 8 : undefined,
                    color: i === hours.length - 1 ? '#5d5e66' : undefined,
                  }}
                >
                  <span>{h.day}</span>
                  <span style={{ fontWeight: 700 }}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Quote Form (client component) */}
        <div>
          <ContactForm heading={formHeading} subtext={formSubtext} />
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ width: '100%', height: 4, background: 'var(--rt-black)' }} />

      {/* ── Map Section ── */}
      <section style={{ height: 500, position: 'relative' }}>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RAMS Trimming Workshop Location"
        />
      </section>

      <style>{`
        @media(max-width:900px) {
          section[style*="gridTemplateColumns: 5fr 7fr"] { grid-template-columns:1fr !important; }
        }
        @media(max-width:768px) {
          section { padding-left:16px !important; padding-right:16px !important; }
          header { padding-left:16px !important; padding-right:16px !important; }
        }
      `}</style>

      {/* FAB */}
      <a href={phoneHref} className="fab" aria-label="Call us">
        <span className="material-symbols-outlined">phone</span>
      </a>
    </main>
  )
}
