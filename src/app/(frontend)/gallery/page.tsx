import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'
import { GalleryClient } from './GalleryClient'

const HERO_BG = '/images/marine-1.jpg'

export default async function GalleryPage() {
  let items: Array<{
    id: string | number
    category: string
    tag: string
    title: string
    desc: string
    imageUrl: string
  }> = []

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'gallery',
      sort: 'order',
      limit: 50,
      depth: 1,
    })
    items = result.docs.map((doc: any) => ({
      id: doc.id,
      category: doc.category || 'marine',
      tag: doc.tag || doc.category || '',
      title: doc.title,
      desc: doc.description || '',
      imageUrl: (doc.image as any)?.url || '',
    }))
  } catch {}

  return (
    <>
      {/* ── Dark Banner Hero ── */}
      <header
        className="gallery-hero"
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
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
          <img
            src={HERO_BG}
            alt="RAMS Trimming craftsmanship"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="hero-content" style={{ position: 'relative', zIndex: 2, padding: '0 64px' }}>
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
                textTransform: 'uppercase',
              }}
            >
              Our Work
            </AnimatedHeading>
            <AnimatedText delay={0.45} style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
              Explore a curated selection of our marine, motor, and industrial trimming projects — delivered with uncompromising quality across WA.
            </AnimatedText>
          </div>
        </div>
        <style>{`
          @media(max-width:768px) {
            .gallery-hero { padding: 0 16px !important; min-height: 260px !important; }
          }
        `}</style>
      </header>

      <main style={{ paddingTop: 64, paddingBottom: 'var(--rt-section-gap)' }}>
        {/* ── Filter + Grid ── */}
        <GalleryClient items={items} />

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
                  textTransform: 'uppercase',
                }}
              >
                Ready to start your custom project?
              </AnimatedHeading>
              <AnimatedText style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.8, marginBottom: 32 }}>
                Whether it&apos;s a small repair or a full interior overhaul, we bring decades of expertise to every stitch.
              </AnimatedText>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                <Link
                  href="/contact"
                  className="btn"
                  style={{ background: 'var(--rt-white)', color: 'var(--rt-black)', fontSize: 12, letterSpacing: '0.15em' }}
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
            main section { padding-left:16px !important; padding-right:16px !important; }
            main section > div { padding:40px 16px !important; }
          }
        `}</style>
      </main>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </>
  )
}
