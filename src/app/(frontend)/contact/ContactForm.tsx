'use client'
import { useState } from 'react'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'

type Props = {
  heading: string
  subtext: string
}

export function ContactForm({ heading, subtext }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Marine',
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
        body: JSON.stringify({ source: 'contact', name: form.name, email: form.email, phone: form.phone, service: form.service, message: form.details }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', service: 'Marine', details: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="contact-form-box"
      style={{
        background: 'var(--rt-white)',
        padding: 48,
        border: '2px solid #cfc4c5',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
      }}
    >
      <AnimatedHeading
        as="h2"
        style={{
          fontFamily: 'var(--rt-font-display)',
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 8,
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
        }}
      >
        {heading}
      </AnimatedHeading>
      <AnimatedText style={{ fontSize: 16, color: '#4c4546', marginBottom: 32, lineHeight: 1.5 }}>
        {subtext}
      </AnimatedText>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            className="form-input"
            type="text"
            placeholder="John Doe"
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
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            className="form-input"
            type="tel"
            placeholder="(08) 9581 8180"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Type of Work</label>
          <div style={{ position: 'relative' }}>
            <select
              className="form-select"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              <option value="Marine">Marine</option>
              <option value="Industrial">Industrial</option>
              <option value="Custom">Custom</option>
            </select>
            <span
              className="material-symbols-outlined"
              style={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: '#7e7576',
              }}
            >
              expand_more
            </span>
          </div>
        </div>
        <div className="form-group" style={{ gridColumn: 'span 2' }}>
          <label className="form-label">Upload Photos</label>
          <label
            style={{
              width: '100%',
              border: '2px dashed #cfc4c5',
              padding: '24px 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 40, color: '#7e7576', marginBottom: 8 }}>
              upload_file
            </span>
            <span style={{ fontSize: 14, color: '#4c4546' }}>Click to upload or drag and drop</span>
            <span style={{ fontSize: 12, color: '#7e7576', marginTop: 4 }}>JPG, PNG (Max 10MB per file)</span>
            <input type="file" accept="image/*" multiple style={{ display: 'none' }} />
          </label>
        </div>
        <div className="form-group" style={{ gridColumn: 'span 2' }}>
          <label className="form-label">Project Details</label>
          <textarea
            className="form-textarea"
            placeholder="Describe the scope, materials, and any specific requirements..."
            rows={5}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            style={{ minHeight: 120 }}
          />
        </div>
        <div style={{ gridColumn: 'span 2', paddingTop: 16 }}>
          {status === 'success' ? (
            <div style={{ padding: '20px', background: '#f0fdf4', border: '1px solid #86efac', color: '#166534', fontFamily: 'var(--rt-font-mono)', fontSize: 13, letterSpacing: '0.05em' }}>
              ✓ Thank you! We&apos;ll get back to you within 24 hours.
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-red"
              disabled={status === 'loading'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                fontSize: 13,
                letterSpacing: '0.15em',
                opacity: status === 'loading' ? 0.6 : 1,
              }}
            >
              <span>{status === 'loading' ? 'SENDING...' : 'Submit Request'}</span>
              {status !== 'loading' && <span className="material-symbols-outlined">send</span>}
            </button>
          )}
          {status === 'error' && (
            <p style={{ color: '#dc2626', fontSize: 13, marginTop: 8 }}>Something went wrong. Please try again or call us directly.</p>
          )}
        </div>
      </form>

      <style>{`
        @media(max-width:768px) {
          .contact-form-box { padding: 24px !important; }
          form { grid-template-columns: 1fr !important; }
          form > div { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  )
}
