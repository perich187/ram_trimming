import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'
import { PortfolioClient } from './PortfolioClient'

const PLACEHOLDER_ITEMS = [
  {
    id: 1,
    category: 'marine',
    tag: 'Marine Grade',
    title: 'Custom Boat Cover',
    desc: 'Heavy-duty waterproof cover with custom-fitted design for full weather protection.',
    imageUrl: '/images/hero.jpg',
  },
  {
    id: 2,
    category: 'marine',
    tag: 'Marine Trimming',
    title: 'Marine Upholstery',
    desc: 'UV-resistant marine vinyl with reinforced stitching for long-lasting durability.',
    imageUrl: '/images/marine-1.jpg',
  },
  {
    id: 3,
    category: 'marine',
    tag: 'Marine Grade',
    title: 'Boat Interior Trim',
    desc: 'Custom marine-grade upholstery designed to withstand the harshest coastal conditions.',
    imageUrl: '/images/marine-4.jpg',
  },
  {
    id: 4,
    category: 'industrial',
    tag: 'Industrial',
    title: 'Industrial Canvas Work',
    desc: 'Heavy-duty PVC and canvas fabrication built to mine-spec standards.',
    imageUrl: '/images/industrial-1.jpg',
  },
  {
    id: 5,
    category: 'industrial',
    tag: 'Industrial',
    title: 'Equipment Protection',
    desc: 'Custom-fabricated covers and enclosures for industrial machinery and equipment.',
    imageUrl: '/images/industrial-2.jpg',
  },
  {
    id: 6,
    category: 'marine',
    tag: 'Custom Cover',
    title: 'Custom Covers & Biminis',
    desc: 'Precision-fitted covers and biminis using premium Sunbrella and WeatherMax fabrics.',
    imageUrl: '/images/covers-1.jpg',
  },
]

export default async function PortfolioPage() {
  let portfolioItems: typeof PLACEHOLDER_ITEMS = []

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'portfolio',
      sort: 'order',
      limit: 50,
      depth: 1,
    })
    portfolioItems = result.docs.map((doc: any) => ({
      id: doc.id,
      category: doc.category || 'marine',
      tag: doc.tag || doc.category || '',
      title: doc.title,
      desc: doc.description || '',
      imageUrl: (doc.image as any)?.url || '',
    }))
  } catch {}

  const items = portfolioItems.length > 0 ? portfolioItems : PLACEHOLDER_ITEMS

  return (
    <main style={{ paddingTop: 128, paddingBottom: 'var(--rt-section-gap)' }}>
      {/* ── Hero Section ── */}
      <header style={{ padding: '0 40px', marginBottom: 64 }}>
        <div style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ display: 'block', height: 4, width: 48, background: 'var(--rt-black)' }} />
            <span className="caps" style={{ color: 'var(--rt-black)' }}>Expertise &amp; Durability</span>
          </div>
          <AnimatedHeading
            as="h1"
            delay={0.2}
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 'clamp(32px,5vw,48px)',
              fontWeight: 700,
              color: 'var(--rt-black)',
              marginBottom: 24,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Our Craftsmanship in Action
          </AnimatedHeading>
          <AnimatedText
            delay={0.45}
            style={{ fontSize: 18, lineHeight: 1.6, color: '#5d5e66', maxWidth: 600 }}
          >
            Explore a curated selection of our finest marine and motor trimming projects. From luxury
            yachts to classic automotive restorations, we deliver uncompromising quality using
            marine-grade materials.
          </AnimatedText>
        </div>
      </header>

      {/* ── Filter + Grid (client component) ── */}
      <PortfolioClient items={items} />

      {/* ── CTA Section ── */}
      <section style={{ marginTop: 'var(--rt-section-gap)', padding: '0 40px' }}>
        <div
          style={{
            background: 'var(--rt-black)',
            color: 'var(--rt-white)',
            padding: '96px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '33%',
              height: '100%',
              opacity: 0.1,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 300, lineHeight: 1 }}>
              sailing
            </span>
          </div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 560 }}>
            <AnimatedHeading
              as="h2"
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 'clamp(28px,4vw,40px)',
                fontWeight: 700,
                marginBottom: 24,
                lineHeight: 1.15,
              }}
            >
              Ready to start your custom project?
            </AnimatedHeading>
            <AnimatedText style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.8, marginBottom: 32 }}>
              Whether it&apos;s a small repair or a full interior overhaul, we bring decades of
              expertise to every stitch.
            </AnimatedText>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <Link
                href="/contact"
                className="btn"
                style={{
                  background: 'var(--rt-white)',
                  color: 'var(--rt-black)',
                  fontSize: 12,
                  boxShadow: '0 4px 0 0 #999999',
                  letterSpacing: '0.15em',
                }}
              >
                REQUEST A QUOTE
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ fontSize: 12, letterSpacing: '0.15em' }}>
                CONTACT OUR TEAM
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px) {
          main { padding-top:80px !important; }
          header, section { padding-left:16px !important; padding-right:16px !important; }
          section[style*="marginTop"] > div { padding:40px 16px !important; }
        }
      `}</style>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
