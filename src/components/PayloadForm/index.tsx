'use client'
import { useState } from 'react'

type SelectOption = { label: string; value: string }

export type FormField =
  | { blockType: 'text'; name: string; label: string; required?: boolean; width?: number; placeholder?: string; defaultValue?: string }
  | { blockType: 'email'; name: string; label: string; required?: boolean; width?: number; placeholder?: string }
  | { blockType: 'textarea'; name: string; label: string; required?: boolean; width?: number; placeholder?: string }
  | { blockType: 'select'; name: string; label: string; required?: boolean; width?: number; options: SelectOption[]; defaultValue?: string }
  | { blockType: 'number'; name: string; label: string; required?: boolean; width?: number; placeholder?: string }
  | { blockType: 'checkbox'; name: string; label: string; required?: boolean; width?: number }
  | { blockType: 'message'; message?: string }

export type PayloadFormDef = {
  id: string | number
  fields: FormField[]
}

type Props = {
  form: PayloadFormDef
  source: string
  layout?: 'grid' | 'stack'
  submitLabel?: string
  confirmationText?: string
}

export function PayloadForm({
  form,
  source,
  layout = 'grid',
  submitLabel = 'Submit Request',
  confirmationText = "✓ Thank you! We'll get back to you within 24 hours.",
}: Props) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const setValue = (name: string, value: string) =>
    setValues((v) => ({ ...v, [name]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const fields = Object.entries(values).map(([field, value]) => ({ field, value }))
      const res = await fetch('/next/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source, formId: form.id, fields }),
      })
      if (res.ok) {
        setStatus('success')
        setValues({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ padding: '20px', background: '#f0fdf4', border: '1px solid #86efac', color: '#166534', fontFamily: 'var(--rt-font-mono)', fontSize: 13, letterSpacing: '0.05em' }}>
        {confirmationText}
      </div>
    )
  }

  const renderField = (field: FormField, i: number) => {
    if (field.blockType === 'message') {
      return (
        <div key={i} style={layout === 'grid' ? { gridColumn: 'span 2', fontSize: 14, color: '#5d5e66' } : { fontSize: 14, color: '#5d5e66' }}>
          {field.message}
        </div>
      )
    }

    const isFullWidth = !field.width || field.width >= 100
    const colStyle = layout === 'grid' ? { gridColumn: isFullWidth ? 'span 2' : 'span 1' } : {}

    if (field.blockType === 'checkbox') {
      return (
        <div key={i} className="form-group" style={{ ...colStyle, display: 'flex', alignItems: 'center', gap: 12 }}>
          <input
            type="checkbox"
            id={field.name}
            name={field.name}
            required={field.required}
            checked={values[field.name] === 'true'}
            onChange={(e) => setValue(field.name, String(e.target.checked))}
          />
          <label htmlFor={field.name} className="form-label" style={{ marginBottom: 0 }}>{field.label}</label>
        </div>
      )
    }

    if (field.blockType === 'select') {
      return (
        <div key={i} className="form-group" style={colStyle}>
          <label className="form-label" htmlFor={field.name}>{field.label}</label>
          <div style={{ position: 'relative' }}>
            <select
              id={field.name}
              name={field.name}
              className="form-select"
              required={field.required}
              value={values[field.name] || ''}
              onChange={(e) => setValue(field.name, e.target.value)}
            >
              <option value="">Select...</option>
              {field.options.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <span className="material-symbols-outlined" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#7e7576' }}>
              expand_more
            </span>
          </div>
        </div>
      )
    }

    if (field.blockType === 'textarea') {
      return (
        <div key={i} className="form-group" style={colStyle}>
          <label className="form-label" htmlFor={field.name}>{field.label}</label>
          <textarea
            id={field.name}
            name={field.name}
            className="form-textarea"
            required={field.required}
            rows={5}
            placeholder={(field as any).placeholder || ''}
            value={values[field.name] || ''}
            onChange={(e) => setValue(field.name, e.target.value)}
            style={{ minHeight: 100 }}
          />
        </div>
      )
    }

    return (
      <div key={i} className="form-group" style={colStyle}>
        <label className="form-label" htmlFor={field.name}>{field.label}</label>
        <input
          id={field.name}
          name={field.name}
          className="form-input"
          type={field.blockType === 'email' ? 'email' : field.blockType === 'number' ? 'number' : 'text'}
          required={field.required}
          placeholder={(field as any).placeholder || ''}
          value={values[field.name] || ''}
          onChange={(e) => setValue(field.name, e.target.value)}
        />
      </div>
    )
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={
          layout === 'grid'
            ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }
            : { display: 'flex', flexDirection: 'column', gap: 24 }
        }
      >
        {form.fields.map((field, i) => renderField(field, i))}
        <div style={layout === 'grid' ? { gridColumn: 'span 2', paddingTop: 8 } : {}}>
          <button
            type="submit"
            className="btn btn-red"
            disabled={status === 'loading'}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, fontSize: 13, letterSpacing: '0.15em', opacity: status === 'loading' ? 0.6 : 1 }}
          >
            <span>{status === 'loading' ? 'SENDING...' : submitLabel}</span>
            {status !== 'loading' && <span className="material-symbols-outlined">send</span>}
          </button>
        </div>
      </form>
      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: 13, marginTop: 8 }}>Something went wrong. Please try again or call us directly.</p>
      )}
      <style>{`
        @media(max-width:768px) {
          form[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
          form[style*="1fr 1fr"] > div { grid-column: span 1 !important; }
        }
      `}</style>
    </>
  )
}
