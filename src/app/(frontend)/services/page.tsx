import Link from 'next/link'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC1FGc_sSS27sCh9zHn4U9EKYmXCPGqusvaRuvljHtwH4xSXUS_ydGRs7yekJf8P2-gcICZD73Ien2gLYr3rKpqcddn4Jb0zR8_bwk1xFMrWhReCCYEpmFm9hMtCbG9f43eN62pciJGwmfnl3ys6kY84bOP9A8kVdfTKWG9I0BApUWZeEkkIDH-32BQVozwPzxfjti2qWp0RHL_OaZoXog0vrvkSjWBhiJI7tSSsTcHSspinge2_KKXFkwnunuomjlDq_GD4xw0-YTY'
const MARINE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApt-7-KRPnp-5_rXRSG-HQwuKDQYYQulpBnreR_y8GgHREEd7oIDemu6tANWJ5-vfXY8XSq0jh6q9UGezabS-A7gfKMpqJuTPV1RK3SVG8gAskQD5SEND4rnS2pxOuuGiQurZoyS8Ikt53YDbXKU8A4RNc2UUqWRcLyKEejZlC_PXcOiGQESzbvy2xADW_Q0_POudpsgylTV3XxJ61gm50S7FAgGs-d1Pqjt3HpCn_9phRMHfY8xLMXy0-JIG4pNEpaMvCIfZ8tjiY'
const MOTOR_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDFcIFHyT9FQOwqQQfl-6Z29sxRK3Y0em9AJ7Uay6t277xOwaqNRwhm_xdV7suTzW-gptuEECbvmTpPrkYc0aFIsSnueKPWLNVgXzcOg8JGfT9pT-HClTCZ44P9gHd2xuigXLZqiqh-9uWIDphibyev3933Kj7D1Zmi09OoLsw2-eTDmp0mJ06AggTHBfTcakqIIl866spiRgZ1L0x1msL0Ne11guZc4t0Jvj7_4jXGIsrLeCaxxylm6Vio5_5daVnGs5ox65MROmwf'

const marineServices = [
  {
    icon: 'wb_sunny',
    title: 'Biminis & Bars',
    desc: 'Full fabrication and installation of bimini tops and supporting bar structures. From simple single-bow to complex multi-bow configurations.',
    items: [
      'Single, double & triple bow biminis',
      'Replacement canopy material',
      'Bar repair and replacement',
      'All hardware supplied',
    ],
  },
  {
    icon: 'waves',
    title: 'Boat Covers & Campers',
    desc: 'Custom-fitted covers for full weather protection. Rear campers, full camper systems, and storm covers for year-round protection.',
    items: [
      'Full camper covers & curtains',
      'Rear campers',
      'Storm covers',
      'Bow covers & snap-on systems',
    ],
  },
  {
    icon: 'visibility',
    title: 'Clears & Curtains',
    desc: 'Crystal-clear PVC front and side clears for all-weather protection without compromising visibility. Precision cut and fitted.',
    items: ['Front & side clears', 'Flybridge clears', 'Replacement duckbill', 'Zip-out systems'],
  },
  {
    icon: 'chair',
    title: 'Boat Upholstery',
    desc: 'Full seat restoration and re-upholstering using marine-grade vinyl and foam. From skipper seats to full cabin interiors.',
    items: [
      'Seat re-upholstering',
      'Foam replacement',
      'Custom cushions',
      'Side board re-upholstery',
    ],
  },
  {
    icon: 'texture',
    title: 'Boat Carpets & Flooring',
    desc: 'Replace worn marine carpets with fresh, marine-grade materials that resist mold, UV fading, and salt water damage.',
    items: [
      'Full carpet replacement',
      'Marine-grade materials',
      'Non-slip surfaces available',
      'Custom colour matching',
    ],
  },
  {
    icon: 'expand',
    title: 'Extensions & Sundecks',
    desc: "Custom rear extensions and sundeck covers to maximise your vessel's usable space and protect from the elements.",
    items: ['Rear extensions', 'Sun deck covers', 'Shade solutions', 'Custom configurations'],
  },
]

const motorServices = [
  {
    icon: 'airline_seat_recline_extra',
    title: 'Car Seats',
    desc: 'Professional seat re-covering, bolstering and foam replacement for all vehicle types. Factory finish or custom upgrade.',
    items: ['Full re-cover', 'Re-bolster & foam', 'Custom colour & material', 'All seat types'],
  },
  {
    icon: 'roofing',
    title: 'Headliners',
    desc: "Sagging or damaged headlining replaced with quality materials. Looks factory-fresh and won't sag again.",
    items: [
      'Headlining replacement',
      'Pillar trims',
      'Sunroof surrounds',
      'All vehicles welcome',
    ],
  },
  {
    icon: 'door_back',
    title: 'Door Panels',
    desc: 'Door card repair, re-covering, and full replacement. Matching materials to maintain a cohesive interior appearance.',
    items: ['Panel re-covering', 'Insert replacement', 'Damage repair', 'Custom inserts'],
  },
  {
    icon: 'local_shipping',
    title: 'Ute Canvas Covers',
    desc: 'Custom-made canvas covers for all ute tray styles. Heavy-duty materials for working vehicles or weekend tourers.',
    items: ['Custom cut & fitted', 'Heavy-duty canvas', 'Snap & zip closures', 'All ute models'],
  },
  {
    icon: 'sports_golf',
    title: 'Golf Buggy Seats',
    desc: 'Specialised golf buggy seat and curtain work. Keep your buggy looking sharp and comfortable on the course.',
    items: ['Seat re-covering', 'Side curtains', 'Weather screens', 'All buggy brands'],
  },
  {
    icon: 'build',
    title: 'Repairs & Restoration',
    desc: 'Tear, crack, and damage repairs to existing upholstery and trim. Cost-effective solutions to extend the life of your interior.',
    items: [
      'Vinyl & leather repair',
      'Stitch replacement',
      'Foam top-up',
      'Trim panel fixes',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main style={{ padding: 'var(--rt-section-gap) 64px' }}>
      {/* Page Hero */}
      <div className="page-hero">
        <img src={HERO_IMG} alt="Services hero" />
        <div className="page-hero-content">
          <span className="page-hero-tag">What We Do</span>
          <h1>Our Services</h1>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* ── Marine Trimming ── */}
        <div className="section-label">
          <span>Marine Trimming</span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 64,
            alignItems: 'start',
            marginBottom: 'var(--rt-section-gap)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 64,
              gridColumn: '1 / -1',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 40,
                  fontWeight: 700,
                  color: 'var(--rt-black)',
                  marginBottom: 20,
                  letterSpacing: '-0.02em',
                }}
              >
                Marine Trimming
              </h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: 'var(--rt-grey-text)',
                  marginBottom: 16,
                }}
              >
                Whether you need a full bimini replacement, new boat carpets, or custom upholstery
                for your vessel, Ram&apos;s Trimming has you covered. We work with all types of
                watercraft — from small tinnies to luxury cruisers.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--rt-grey-text)' }}>
                All marine work uses UV-stabilised, saltwater-resistant materials designed to
                withstand the harsh Australian coastal environment.
              </p>
            </div>
            <img
              src={MARINE_IMG}
              alt="Marine trimming"
              style={{ width: '100%', height: 280, objectFit: 'cover' }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 24,
            marginBottom: 'var(--rt-section-gap)',
          }}
        >
          {marineServices.map((svc) => (
            <div key={svc.title} className="service-card">
              <div className="icon">
                <span className="material-symbols-outlined">{svc.icon}</span>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <ul>
                {svc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Motor Trimming ── */}
        <div style={{ height: 4, background: 'var(--rt-black)', marginBottom: 64 }} />
        <div className="section-label">
          <span>Motor Trimming</span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 64,
            alignItems: 'start',
            marginBottom: 48,
          }}
        >
          <img
            src={MOTOR_IMG}
            alt="Motor trimming"
            style={{ width: '100%', height: 300, objectFit: 'cover' }}
          />
          <div>
            <h2
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 40,
                fontWeight: 700,
                color: 'var(--rt-black)',
                marginBottom: 20,
                letterSpacing: '-0.02em',
              }}
            >
              Motor Body Trimming
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'var(--rt-grey-text)',
                marginBottom: 16,
              }}
            >
              From headlining restoration to custom seat covers and door panels, our motor trimming
              service transforms vehicle interiors with precision craftsmanship.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--rt-grey-text)' }}>
              Whether it&apos;s a classic car interior restore, a ute canvas replacement, or golf
              buggy seats, no job is too big or too small.
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 24,
            marginBottom: 'var(--rt-section-gap)',
          }}
        >
          {motorServices.map((svc) => (
            <div key={svc.title} className="service-card">
              <div className="icon">
                <span className="material-symbols-outlined">{svc.icon}</span>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <ul>
                {svc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            background: 'var(--rt-black)',
            padding: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          <div>
            <span className="caps" style={{ color: 'var(--rt-white)' }}>
              Ready to get started?
            </span>
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 32,
                color: 'var(--rt-white)',
                marginTop: 12,
                fontWeight: 700,
              }}
            >
              Get a free quote today.
            </h3>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <a href="tel:0435929441" className="btn btn-outline">
              Call 0435 929 441
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px) { main { padding:60px 16px !important; } }
        @media(max-width:900px) {
          .services-intro { grid-template-columns:1fr !important; }
          .service-cards { grid-template-columns:1fr !important; }
        }
        @media(min-width:600px) and (max-width:900px) {
          .service-cards { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
