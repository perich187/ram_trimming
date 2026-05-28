'use client'
import { useState } from 'react'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'

type WhyItem = { icon: string; label: string }

type Props = {
  whyHeading: string
  whyItems: WhyItem[]
  quoteHeading: string
  quoteSubtext: string
}

export function HomeQuoteForm({ whyHeading, whyItems, quoteHeading, quoteSubtext }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Marine Trimming',
    details: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/next/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'home-quote', name: form.name, email: form.email, service: form.service, message: form.details }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', service: 'Marine Trimming', details: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="why" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* Left: Why Choose Rams */}
      <div
        style={{
          background: 'var(--rt-black)',
          color: 'var(--rt-white)',
          padding: 'var(--rt-section-gap) 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: 480, marginLeft: 'auto' }}>
          <AnimatedHeading
            as="h2"
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 40,
              fontWeight: 700,
              color: 'var(--rt-white)',
              marginBottom: 48,
              lineHeight: 1.15,
            }}
          >
            {whyHeading}
          </AnimatedHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {whyItems.map((item) => (
              <div key={item.icon} style={{ display: 'flex', gap: 24 }}>
                <div
                  style={{
                    background: '#e2e2e3',
                    padding: 12,
                    height: 'fit-content',
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 30, color: 'var(--rt-black)' }}>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h4 className="caps" style={{ color: '#f3f3f4' }}>{item.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Quote Form */}
      <div
        id="contact"
        style={{
          background: '#e2e2e3',
          padding: 'var(--rt-section-gap) 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <AnimatedHeading
            as="h2"
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 40,
              fontWeight: 700,
              color: 'var(--rt-black)',
              marginBottom: 16,
            }}
          >
            {quoteHeading}
          </AnimatedHeading>
          <AnimatedText style={{ fontSize: 16, color: '#4c4546', marginBottom: 40, lineHeight: 1.5 }}>
            {quoteSubtext}
          </AnimatedText>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
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
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Project Details</label>
              <textarea
                className="form-textarea"
                placeholder="Describe your boat or vehicle model and what you need..."
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
              />
            </div>
            {status === 'success' ? (
              <div style={{ padding: '20px', background: '#f0fdf4', border: '1px solid #86efac', color: '#166534', fontFamily: 'var(--rt-font-mono)', fontSize: 13, letterSpacing: '0.05em' }}>
                ✓ Thanks! We&apos;ll be in touch within 24 hours.
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-red"
                disabled={status === 'loading'}
                style={{ letterSpacing: '0.18em', fontSize: 13, padding: '20px', opacity: status === 'loading' ? 0.6 : 1 }}
              >
                {status === 'loading' ? 'SENDING...' : 'SUBMIT MY REQUEST'}
              </button>
            )}
            {status === 'error' && (
              <p style={{ color: '#dc2626', fontSize: 13, marginTop: 8 }}>Something went wrong. Please try again or call us directly.</p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media(max-width:900px) {
          #why { grid-template-columns:1fr !important; }
          #why > div { padding:64px 16px !important; }
          #why > div > div { margin-left:0 !important; max-width:100% !important; }
        }
      `}</style>
    </section>
  )
}
