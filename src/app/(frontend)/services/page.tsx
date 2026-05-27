'use client'
import Link from 'next/link'

const SERVICES_HERO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApt-7-KRPnp-5_rXRSG-HQwuKDQYYQulpBnreR_y8GgHREEd7oIDemu6tANWJ5-vfXY8XSq0jh6q9UGezabS-A7gfKMpqJuTPV1RK3SVG8gAskQD5SEND4rnS2pxOuuGiQurZoyS8Ikt53YDbXKU8A4RNc2UUqWRcLyKEejZlC_PXcOiGQESzbvy2xADW_Q0_POudpsgylTV3XxJ61gm50S7FAgGs-d1Pqjt3HpCn_9phRMHfY8xLMXy0-JIG4pNEpaMvCIfZ8tjiY'
const MARINE_MAIN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDVlaGdmQdJcchxiFCgFQh_-9lo37ZobKZbEIZvxsuHCzX-7xbdWiHDivrF5owGM1X2SqZkAqg81S4Kc1KijBMvxe4vZ3Tl_CMEp5Xge5QVL6_dtPnzUJ2wvw4nX4Y963fa4ocbw1c_3P6NCoubpnQ2q3yNtcaeBwBReP8cgQ8CjgJ1vyVfUENO9vsF1c6BM3XWHKz3CyTvLd5yIbF34EKGqxfnJbQN14CKBdbvM3H9u-IBTRvuaVPHMAnoiDm730PRagxR0C1lXc--'
const MARINE_SIDE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC7zATN78yFcuSkPBziPQ3Tmgu-8P4jfUTzczJeb5xd8PrPZIYXKSSdkz1yYQVzNCjfZVdsVUo2JxhQ5wzfsXqayGFFuXxAXZrnkBUzhEDoJw02KUDFWjRz6TuGPQls0XFw80wHdoSrWohSIWL6SGSHeHt5MP-dhVaxW0hcV9zfTvkuX9s40ckip12uKsgqjiZrsm3wS3tZduJzwT4uKuhMBtjdKqSzVPIoAVUtY_HMNEg08MNLVFNEsGYkcAY-9QYCDlT0FD73i-t8'
const MINING_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDwHhPBlGHEn1P0TYbKxyr9hyWMC0SSrRFnWpIJyA4vaY4wiZX3KnOLCY7qaADAngYRqol_dj-gjLePUuA-RlKzmWSRz1nLFXmEOpBZKR223RJ4HADzI0lw5GLS-pDTmngx_2tTxsHaymXT2oDQMlfDM_ElD3B3AIrQpQjiApctYoZbuZ_77H70PQSHQ5B7aQg-BupSCB0gW_VRRX8ZKSP_6UT4A5bqiN6qsne2JphJn63mGRed17N-XOjE6b8Xzl_48gbfkuvn7zlF'
const CANOPY_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBWx-lhXLyhY1Y7mtbSQwZ7twZnvGCWfOedgQpwpAThHveFGyahhl9l4ih6G2FzjMrS-a7OBM-MyzEDwHiu-DqKw3t8qbapLpOy_Z_kpk7Y3Qb3yaYUfJo9SwjhnY-Zw117n0k6cEefTVX0QlY_tvMaILaAUh05yYZYEdV9VVM29dBZDsBsbDs6WRksRFETPpTv6ed8oAXHaGhSehMY01mt4IayCoJD_zwGBMANOdEHOgCUqf4Siu9m0DMrYFI_MSRp8up55dHyDL8u'
const TRAILER_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDVzA6AvzLHKvMHHbmYjND-o_rK-l8fI_iAvdGFdxUdIz8Eu5l10Piu8twDZWP_9CytPUmmh1EIvCQ9ZXZPHlaeeC4r_FPw_L5J-GzZKYBS2_mgaVAT7MW_QXisfPt3Kg1uhx5IE2licLcN4VjoFutIN8Oreu1LYRwTiGwHaYXhzWi6rrCmFrX-Oz-kTeR9feX6sP2haCLPu_gl6OdCKArjfLaREK8UOt0ENYqpWVmXqCICqLqSflkp_JUbzmZdkGWAxb2QB9ANTb8Z'
const HEADLINING_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDFcIFHyT9FQOwqQQfl-6Z29sxRK3Y0em9AJ7Uay6t277xOwaqNRwhm_xdV7suTzW-gptuEECbvmTpPrkYc0aFIsSnueKPWLNVgXzcOg8JGfT9pT-HClTCZ44P9gHd2xuigXLZqiqh-9uWIDphibyev3933Kj7D1Zmi09OoLsw2-eTDmp0mJ06AggTHBfTcakqIIl866spiRgZ1L0x1msL0Ne11guZc4t0Jvj7_4jXGIsrLeCaxxylm6Vio5_5daVnGs5ox65MROmwf'
const SEAT_REPAIR_IMG = MARINE_SIDE

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero Header ── */}
      <header
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
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 1,
            }}
          />
          <img
            src={SERVICES_HERO}
            alt="Marine and motor trimming craftsmanship"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 64px' }}>
          <div
            style={{
              background: 'rgba(0,0,0,0.9)',
              padding: 40,
              maxWidth: 560,
              borderLeft: '8px solid #7e7576',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 'clamp(32px,4vw,48px)',
                fontWeight: 700,
                color: 'var(--rt-white)',
                marginBottom: 16,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Precision Craftsmanship
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
              Expert marine, motor, and industrial trimming. Delivering professional-grade durability
              since 1987.
            </p>
          </div>
        </div>
      </header>

      {/* ── 01. Marine Trimming ── */}
      <section
        id="marine"
        style={{ padding: 'var(--rt-section-gap) 64px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            01. Marine Trimming
          </h2>
          <div style={{ flexGrow: 1, height: 4, background: 'var(--rt-black)' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            WATERPROOF EXCELLENCE
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '8fr 4fr', gap: 24 }}>
          {/* Main card */}
          <div
            style={{
              background: '#eeeeef',
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              overflow: 'hidden',
            }}
          >
            <img
              src={MARINE_MAIN}
              alt="Marine trimming project"
              style={{ width: '100%', height: 400, objectFit: 'cover', transition: 'transform 0.7s' }}
              onMouseOver={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
              onMouseOut={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
            />
            <div style={{ padding: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span className="caps" style={{ color: '#7e7576' }}>PRIMARY SERVICE</span>
                  <h3
                    style={{
                      fontFamily: 'var(--rt-font-display)',
                      fontSize: 32,
                      fontWeight: 700,
                      marginTop: 8,
                    }}
                  >
                    Custom Marine Upholstery
                  </h3>
                </div>
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'rgba(0,0,0,0.15)' }}>
                  directions_boat
                </span>
              </div>
              <p style={{ marginTop: 16, color: '#5d5e66', maxWidth: 560, fontSize: 16, lineHeight: 1.6 }}>
                We provide comprehensive marine trimming solutions using high-grade UV-resistant
                materials and foams designed for the Australian maritime environment.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
                {['Boat Covers', 'Upholstery', 'Bimini Tops', 'Clears'].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      borderLeft: '2px solid var(--rt-black)',
                      paddingLeft: 16,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ color: '#7e7576', fontSize: 20 }}>
                      check_circle
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Side card */}
          <div
            style={{
              background: 'var(--rt-black)',
              color: 'var(--rt-white)',
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderBottom: '8px solid #7e7576',
            }}
          >
            <div style={{ overflow: 'hidden', marginBottom: 24 }}>
              <img
                src={MARINE_SIDE}
                alt="Marine Upholstery"
                style={{ width: '100%', height: 192, objectFit: 'cover', marginBottom: 24 }}
              />
              <h3
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Deck &amp; Canopy Care
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, opacity: 0.9 }}>
                {[
                  'Sun-decks & Duckbill repairs',
                  'Marine-grade carpets',
                  'Specialized canopy frames',
                  'Storm-proof enclosures',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        background: '#7e7576',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              style={{
                alignSelf: 'flex-start',
                background: 'none',
                border: 'none',
                borderBottom: '2px solid var(--rt-white)',
                color: 'var(--rt-white)',
                cursor: 'pointer',
                fontFamily: 'var(--rt-font-mono)',
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                padding: '4px 0',
              }}
            >
              VIEW MARINE GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* ── 02. Industrial Textiles ── */}
      <section
        id="industrial"
        style={{ padding: '80px 64px', background: '#f3f3f4' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            02. Industrial Textiles
          </h2>
          <div style={{ flexGrow: 1, height: 4, background: 'var(--rt-black)' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            HEAVY DUTY SOLUTIONS
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}>
          {/* Left info block */}
          <div
            style={{
              background: 'var(--rt-black)',
              color: 'var(--rt-white)',
              padding: 40,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 30,
                fontWeight: 700,
                marginBottom: 24,
              }}
            >
              Built for Performance
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginBottom: 32, lineHeight: 1.7 }}>
              Our industrial solutions are engineered to withstand the toughest conditions, from
              mining sites to large-scale agricultural operations.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: 'engineering', label: 'Reinforced Stitching' },
                { icon: 'shield', label: 'UV & Tear Resistant' },
              ].map((item) => (
                <div key={item.icon} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span
                    style={{
                      padding: 8,
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </span>
                  <span className="caps" style={{ color: 'var(--rt-white)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right 2x2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div
              style={{
                background: 'var(--rt-white)',
                padding: 32,
                borderTop: '4px solid #7e7576',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <img src={MINING_IMG} alt="Mining Solutions" style={{ width: '100%', height: 160, objectFit: 'cover', marginBottom: 24 }} />
              <h4
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Mining &amp; Ag Solutions
              </h4>
              <p style={{ color: '#5d5e66', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Specialized protective covers and barriers for heavy machinery and site infrastructure.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Mining Solutions
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Agricultural Solutions
                </li>
              </ul>
            </div>
            <div
              style={{
                background: 'var(--rt-white)',
                padding: 32,
                borderTop: '4px solid var(--rt-black)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                Equipment Protection
              </h4>
              <p style={{ color: '#5d5e66', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
                Custom-fit protection for high-value industrial equipment and logistics.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, fontWeight: 600, marginBottom: 24 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Equipment Covers
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> Heavy Duty Tarps
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--rt-black)' }}>→</span> PVC Covers
                </li>
              </ul>
              <img src={CANOPY_IMG} alt="Large Canopy" style={{ width: '100%', height: 160, objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03. Custom Covers ── */}
      <section
        id="custom-covers"
        style={{ padding: 'var(--rt-section-gap) 64px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            03. Custom Covers
          </h2>
          <div style={{ flexGrow: 1, height: 4, background: 'var(--rt-black)' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            BESPOKE PROTECTION
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {/* Intro card */}
          <div style={{ background: '#eeeeef', padding: 32, display: 'flex', flexDirection: 'column' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#7e7576', marginBottom: 16, display: 'block' }}>
              home_repair_service
            </span>
            <h3
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Outdoor &amp; Travel
            </h3>
            <p style={{ color: '#5d5e66', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
              Bespoke covers designed to protect your lifestyle investments from the elements.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: 24 }}>
              <img src={TRAILER_IMG} alt="Trailer Cover" style={{ width: '100%', height: 128, objectFit: 'cover' }} />
            </div>
          </div>
          {/* Item cards */}
          {[
            { num: '01', title: 'Outdoor Furniture', desc: 'Tailored covers for all types of outdoor dining and lounge sets using waterproof fabrics.' },
            { num: '02', title: 'Caravan Drawbar', desc: 'High-durability protection for caravan towing hardware and exposed front elements.' },
            { num: '03', title: 'Storage Bags', desc: 'Custom-sized, reinforced storage bags for tools, gear, and specialized equipment.' },
          ].map((item) => (
            <div
              key={item.num}
              style={{
                background: '#eeeeef',
                padding: 32,
                borderBottom: '4px solid transparent',
                transition: 'border-color 0.2s',
              }}
              onMouseOver={(e) => ((e.currentTarget as HTMLDivElement).style.borderBottomColor = '#7e7576')}
              onMouseOut={(e) => ((e.currentTarget as HTMLDivElement).style.borderBottomColor = 'transparent')}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: 'var(--rt-black)',
                  color: 'var(--rt-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                  fontFamily: 'var(--rt-font-mono)',
                  fontWeight: 600,
                }}
              >
                {item.num}
              </div>
              <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{item.title}</h4>
              <p style={{ fontSize: 14, color: '#5d5e66', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04. Motor Trimming ── */}
      <section
        id="motor"
        style={{ padding: '80px 64px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 32,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            04. Motor Trimming
          </h2>
          <div style={{ flexGrow: 1, height: 4, background: '#7e7576' }} />
          <span className="caps" style={{ color: 'rgba(0,0,0,0.4)', whiteSpace: 'nowrap' }}>
            AUTOMOTIVE CRAFT
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            {
              img: HEADLINING_IMG,
              tag: 'INTERIOR RESTORATION',
              title: 'Head Linings',
              desc: 'Sagging or damaged roof linings replaced with factory-matched or custom materials.',
              detail: 'PRECISION FIT',
            },
            {
              img: TRAILER_IMG,
              tag: 'UTILITY SOLUTIONS',
              title: 'Ute Canvas Covers',
              desc: 'Custom-made heavy-duty canvas covers for utilities and trailers. Reinforced for extreme durability.',
              detail: 'WEATHER-SHIELD',
            },
            {
              img: SEAT_REPAIR_IMG,
              tag: 'REPAIRS & PANELS',
              title: 'Seat & Door Repairs',
              desc: 'Expert repair, re-cover, and re-bolster of car seats. Specialized door panel trimming.',
              detail: 'LUXURY COMFORT',
            },
          ].map((svc) => (
            <div
              key={svc.title}
              style={{ background: 'var(--rt-white' }}
              className="motor-card"
            >
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  style={{ width: '100%', height: 256, objectFit: 'cover', transition: 'all 0.5s' }}
                />
              </div>
              <div
                style={{
                  padding: 24,
                  borderLeft: '2px solid transparent',
                  borderRight: '2px solid transparent',
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s',
                }}
                className="motor-card-inner"
              >
                <h4 className="caps" style={{ color: 'var(--rt-black)', marginBottom: 8 }}>{svc.tag}</h4>
                <h3
                  style={{
                    fontFamily: 'var(--rt-font-display)',
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  {svc.title}
                </h3>
                <p style={{ color: '#5d5e66', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>{svc.desc}</p>
                <hr style={{ borderTop: '2px solid #e8e8e9', marginBottom: 16 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="caps" style={{ color: 'var(--rt-black)', fontSize: 10 }}>{svc.detail}</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote CTA ── */}
      <section style={{ padding: '0 64px 80px' }}>
        <div
          style={{
            background: 'var(--rt-black)',
            color: 'var(--rt-white)',
            padding: '80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              padding: 40,
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 200, fontVariationSettings: "'FILL' 1" }}
            >
              straighten
            </span>
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--rt-font-display)',
                  fontSize: 'clamp(32px,4vw,48px)',
                  fontWeight: 700,
                  marginBottom: 24,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                Ready to start your project?
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 32, maxWidth: 440, lineHeight: 1.6 }}>
                Whether it&apos;s a luxury yacht, industrial equipment, or custom outdoor protection,
                we bring the same level of industrial expertise.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link
                  href="/contact"
                  className="btn"
                  style={{
                    background: 'var(--rt-white)',
                    color: 'var(--rt-black)',
                    fontSize: 12,
                    borderBottom: '4px solid rgba(0,0,0,0.3)',
                  }}
                >
                  REQUEST A CALL
                </Link>
                <Link
                  href="/portfolio"
                  className="btn btn-outline"
                  style={{ fontSize: 12 }}
                >
                  VIEW PORTFOLIO
                </Link>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: 24,
                  borderLeft: '4px solid #7e7576',
                }}
              >
                <h4 className="caps" style={{ color: '#7e7576', marginBottom: 4 }}>DIRECT CONTACT</h4>
                <p style={{ fontSize: 24, fontWeight: 700 }}>08 9581 8180</p>
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: 24,
                  borderLeft: '4px solid #7e7576',
                }}
              >
                <h4 className="caps" style={{ color: '#7e7576', marginBottom: 4 }}>WORKSHOP LOCATION</h4>
                <p style={{ fontSize: 24, fontWeight: 700 }}>6C Harlem Place, Greenfields</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:1024px) {
          #marine > div:last-child { grid-template-columns: 1fr !important; }
          #industrial > div:last-child { grid-template-columns: 1fr !important; }
          #custom-covers > div:last-child { grid-template-columns: 1fr 1fr !important; }
          section[id="motor"] > div:last-child { grid-template-columns: 1fr 1fr !important; }
          section:last-of-type > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media(max-width:768px) {
          header { padding: 0 16px !important; }
          #marine, #custom-covers, #motor { padding-left:16px !important; padding-right:16px !important; }
          #industrial { padding-left:16px !important; padding-right:16px !important; }
          section:last-of-type { padding-left:16px !important; padding-right:16px !important; }
          section:last-of-type > div { padding:40px 16px !important; }
          #marine > div:first-child, #industrial > div:first-child, #custom-covers > div:first-child, #motor > div:first-child {
            flex-wrap: wrap;
          }
          #custom-covers > div:last-child { grid-template-columns: 1fr !important; }
          section[id="motor"] > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
