'use client'
import { useState } from 'react'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'

type PortfolioItem = {
  id: string | number
  category: string
  tag: string
  title: string
  desc: string
  imageUrl: string
}

type Filter = { key: string; label: string }

const filters: Filter[] = [
  { key: 'all', label: 'All Work' },
  { key: 'marine', label: 'Marine' },
  { key: 'motor', label: 'Motor' },
  { key: 'industrial', label: 'Industrial' },
  { key: 'special', label: 'Special Projects' },
]

type Props = {
  items: PortfolioItem[]
}

export function GalleryClient({ items }: Props) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all' ? items : items.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* ── Filter System ── */}
      <section style={{ padding: '0 40px', marginBottom: 48 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 24,
            borderBottom: '2px solid #eeeeef',
            paddingBottom: 16,
          }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--rt-font-mono)',
                fontSize: 14,
                letterSpacing: '0.05em',
                fontWeight: activeFilter === f.key ? 700 : 500,
                color: activeFilter === f.key ? 'var(--rt-black)' : '#5d5e66',
                borderBottom: activeFilter === f.key ? '2px solid var(--rt-black)' : '2px solid transparent',
                paddingBottom: 8,
                paddingLeft: 4,
                paddingRight: 4,
                transition: 'all 0.2s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Masonry Gallery Grid ── */}
      <section style={{ padding: '0 40px' }}>
        <div className="masonry-grid">
          {filtered.map((item) => (
            <article key={item.id} className="masonry-item project-card" style={{ cursor: 'pointer' }}>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#eeeeef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.5s',
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.7s ease',
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                  }}
                />
                <div
                  style={{
                    padding: 24,
                    background: 'var(--rt-white)',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseOver={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderBottomColor = 'var(--rt-black)')
                  }
                  onMouseOut={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderBottomColor = 'transparent')
                  }
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '3px 12px',
                      background: 'var(--rt-black)',
                      color: 'var(--rt-white)',
                      fontFamily: 'var(--rt-font-mono)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: 12,
                    }}
                  >
                    {item.tag}
                  </span>
                  <AnimatedHeading
                    as="h3"
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </AnimatedHeading>
                  <AnimatedText style={{ fontSize: 14, color: '#5d5e66', lineHeight: 1.5 }}>
                    {item.desc || ''}
                  </AnimatedText>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .masonry-grid { column-count: 1; column-gap: 24px; }
        @media (min-width: 768px) { .masonry-grid { column-count: 2; } }
        @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        .masonry-item { break-inside: avoid; margin-bottom: 24px; }
        @media(max-width:768px) {
          section { padding-left:16px !important; padding-right:16px !important; }
        }
      `}</style>
    </>
  )
}
