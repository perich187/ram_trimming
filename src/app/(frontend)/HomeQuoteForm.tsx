'use client'
import { AnimatedHeading } from '@/components/AnimatedHeading'
import { AnimatedText } from '@/components/AnimatedText'
import { PayloadForm, type PayloadFormDef } from '@/components/PayloadForm'

type WhyItem = { icon: string; label: string }

type Props = {
  whyHeading: string
  whyItems: WhyItem[]
  quoteHeading: string
  quoteSubtext: string
  payloadForm?: PayloadFormDef | null
}

const FALLBACK_HOME_FORM: PayloadFormDef = {
  id: 'fallback-home-quote',
  fields: [
    { blockType: 'text', name: 'name', label: 'Full Name', required: true, width: 50, placeholder: 'John Smith' },
    { blockType: 'email', name: 'email', label: 'Email Address', required: true, width: 50, placeholder: 'john@example.com' },
    { blockType: 'text', name: 'phone', label: 'Phone Number', required: false, width: 50, placeholder: '0400 000 000' },
    { blockType: 'select', name: 'service', label: 'Service Type', required: false, width: 50, options: [{ label: 'Marine Trimming', value: 'Marine Trimming' }, { label: 'Motor Trimming', value: 'Motor Trimming' }, { label: 'Industrial Textiles', value: 'Industrial Textiles' }, { label: 'Custom Covers', value: 'Custom Covers' }] },
    { blockType: 'textarea', name: 'message', label: 'Project Details', required: false, width: 100, placeholder: 'Describe your project...' },
  ],
}

export function HomeQuoteForm({ whyHeading, whyItems, quoteHeading, quoteSubtext, payloadForm }: Props) {
  const activeForm = payloadForm || FALLBACK_HOME_FORM

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
          <PayloadForm
            form={activeForm}
            source="home-quote"
            layout="stack"
            submitLabel="SUBMIT MY REQUEST"
            confirmationText="✓ Thanks! We'll be in touch within 24 hours."
          />
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
