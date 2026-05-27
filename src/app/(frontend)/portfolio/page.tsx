'use client'
import Link from 'next/link'
import { useState } from 'react'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC773KiEyz05ggx0RcnwZEOZGcireHUMVTRsQSuSp3qfyRsonamvK7cF5qvDqXmgJLGHZfGNp4JKiKO56mhsIovukmh6ltIxY7AIzz0ZNOQ2Z910WjgtGKSSGSzNWwmlktK9_M66abPZqF4tuWOWjtCmEeuZgyvuE1GQic5QuRJOFm--J8EjEkx8buGeCyP30qXszP6-96eP05yvRI7hfKR_DUwpro62VEADmnckAAjN-BKg4rXm4z2I_cvPbNs3kAXXOB28L4T7inj'

const portfolioItems = [
  {
    id: 1,
    category: 'marine',
    tag: 'Marine Trimming',
    title: 'Custom Bimini — 26ft Cruise Craft',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWx-lhXLyhY1Y7mtbSQwZ7twZnvGCWfOedgQpwpAThHveFGyahhl9l4ih6G2FzjMrS-a7OBM-MyzEDwHiu-DqKw3t8qbapLpOy_Z_kpk7Y3Qb3yaYUfJo9SwjhnY-Zw117n0k6cEefTVX0QlY_tvMaILaAUh05yYZYEdV9VVM29dBZDsBsbDs6WRksRFETPpTv6ed8oAXHaGhSehMY01mt4IayCoJD_zwGBMANOdEHOgCUqf4Siu9m0DMrYFI_MSRp8up55dHyDL8u',
    featured: true,
  },
  {
    id: 2,
    category: 'motor',
    tag: 'Motor Trimming',
    title: 'Seat Restore — Ford Ranger',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFcIFHyT9FQOwqQQfl-6Z29sxRK3Y0em9AJ7Uay6t277xOwaqNRwhm_xdV7suTzW-gptuEECbvmTpPrkYc0aFIsSnueKPWLNVgXzcOg8JGfT9pT-HClTCZ44P9gHd2xuigXLZqiqh-9uWIDphibyev3933Kj7D1Zmi09OoLsw2-eTDmp0mJ06AggTHBfTcakqIIl866spiRgZ1L0x1msL0Ne11guZc4t0Jvj7_4jXGIsrLeCaxxylm6Vio5_5daVnGs5ox65MROmwf',
    featured: false,
  },
  {
    id: 3,
    category: 'marine',
    tag: 'Marine Trimming',
    title: 'Full Camper System — Quintrex 520',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVlaGdmQdJcchxiFCgFQh_-9lo37ZobKZbEIZvxsuHCzX-7xbdWiHDivrF5owGM1X2SqZkAqg81S4Kc1KijBMvxe4vZ3Tl_CMEp5Xge5QVL6_dtPnzUJ2wvw4nX4Y963fa4ocbw1c_3P6NCoubpnQ2q3yNtcaeBwBReP8cgQ8CjgJ1vyVfUENO9vsF1c6BM3XWHKz3CyTvLd5yIbF34EKGqxfnJbQN14CKBdbvM3H9u-IBTRvuaVPHMAnoiDm730PRagxR0C1lXc--',
    tall: true,
  },
  {
    id: 4,
    category: 'upholstery',
    tag: 'Upholstery',
    title: 'Full Interior — Classic Holden',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPLQg3nVe5EPN3diXHtXyJfRXtu4FkKXDkscH1i1sA_1-p620W5bnE1S240WE3GQK_uNqlbZNmYHVYbTsN1-v-dUd1O8KyYmI0KCRCFaj3_xQJ-DswlTkrIGzCvN90Ni0aPuv1XS_pXD7k0UMxgIDw2aFMD4f-jLJivkuScCJrXqinB-YRG8v9-23n8dWcrAXKPwqwoP43lvMNS3101KUsVVpz85ozwruw3Wm97M521cW_PLzoItXC7haJ6oAQyZU2tiele9jDhg5f',
  },
  {
    id: 5,
    category: 'marine',
    tag: 'Marine Trimming',
    title: 'Upholstery — Sea Ray 280',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7zATN78yFcuSkPBziPQ3Tmgu-8P4jfUTzczJeb5xd8PrPZIYXKSSdkz1yYQVzNCjfZVdsVUo2JxhQ5wzfsXqayGFFuXxAXZrnkBUzhEDoJw02KUDFWjRz6TuGPQls0XFw80wHdoSrWohSIWL6SGSHeHt5MP-dhVaxW0hcV9zfTvkuX9s40ckip12uKsgqjiZrsm3wS3tZduJzwT4uKuhMBtjdKqSzVPIoAVUtY_HMNEg08MNLVFNEsGYkcAY-9QYCDlT0FD73i-t8',
  },
  {
    id: 6,
    category: 'motor',
    tag: 'Motor Trimming',
    title: 'Canvas Cover — Toyota Hilux',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0qVtl6Ju4RJeDw9twjYsYTAsUdOXRAjOhN_P3XPAtKd2YvkUi8fflcP3tbZ4v5F361IMYOqQMJ4ih2l7wbTb4mAFlZLjwFRnWWgcrVe0e-EJB6ie0twieU130j4aMYXlyoxIkZK7jAVfm5qfsZ14eozkXc4KoTp0ObLDtPASC4dSwoQgThCnKFg-pdEZ6v2s60uy5pP5ynK6qdyHEJFWc6Jbx6BI69fvPq5UVNwrBjMgsDIk9tGLJnE38Ic54DezWouQ9Ve1Zt45s',
  },
  {
    id: 7,
    category: 'marine',
    tag: 'Marine Trimming',
    title: 'Front Clears — Sailfish 2000',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7NmVSSIx1WpWy8nKlOX7GySbczfh0ayCqxWSZyWR5ZILVIhvus3nfqaRrVmDWckeJU9Ub8yemq1cH_PzjTiBTqjz2rccIC74PAk7x4D5cHDdyjXlMb82BevjTrobrQDczbaB4im6ReAysiN4pjv9MMZ04M3DdduS85nKbml7djLEqFUAv7Hj5rqVxTTztsPnHCcGXywwM5FdgEOVHXqs6-cmljEVFNQtN3lYAcfT5RGGtJCXeVJrX-9vu3sQRp1cjKSVec6GFBGwi',
    tall: true,
  },
  {
    id: 8,
    category: 'upholstery',
    tag: 'Upholstery',
    title: 'Golf Buggy — Full Seat Set',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNqVjPQf5nBZXz0VkePs25AOJ96V3-SXwQTtEjsqeJ6etto0M9MwPNOk7DrNC7yV7TBKOiH9mRIjG1Aojhkv2zNMU9dbyvzTR_QK7oi_NEwpPSgak9bw2_-fYDD4ywVQZD4h7cZB2e2rPvwFRnL3t07yf-kwB8n_YpqJSv5NEgSVQBJzlRkiovdlkHSpmafnhmL7uF97aq444FTVfJEqfd_wlTlP8EcRO-TxBPSa8tnGbZMSVD-OeB121rOOruSNQwrKdot-qUQoX0',
  },
  {
    id: 9,
    category: 'marine',
    tag: 'Marine Trimming',
    title: 'Sundeck Cover — Haines Signature',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOwsH3faYsqe_QJyHIVOLOFi7QmLKfSmj71ljR3BhaNxrYnojVtj_vXs6zb-85ydGk0ENqLNbRThQh0X2gXZo2nCAfTBmk4u0J8a6bgk-AIQfx3LnCJvIdHshWEAzIrdyrEpW7hzH6ERNWjSrYfejY1JwDm55KdRI2erOTVw4AbhJF3ZfBeZ9IF9sCIccH1ZCjYxef6MR0pDwQ2Y9W6hg7KeF6d0Rhgkpgu81Ew7cew_2ECSXNM0Tp5RN2k4QOJHwT7-YGaXXgCXYZ',
  },
  {
    id: 10,
    category: 'motor',
    tag: 'Motor Trimming',
    title: 'Headliner — 80 Series Landcruiser',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTHOcfaehtUMoYyUADEhCX3L_8eSYtBkxMVMeUoue0ru-EVimVQ9fXi6EAsKlU918Akc58Fqifc_dVUIGnM9iCKPS6ye4qubpDYTG8IFdK-KcOQlU-hIEbjj2Q85nLvEJDNqLcYsk17_tsIWaMbCSHCQ70zenUvkx6Tckre8TrtNb0cT38w4i314QEQdQxfp2RCoUOeGWU96jLo47NuKyhBHHWgoqXosQN0-05SkTTmJ8nJuBS-FYGhu3T2mFnwBD9aN4dQ37S5eXV',
  },
  {
    id: 11,
    category: 'marine',
    tag: 'Marine Trimming',
    title: 'Boat Carpet — Stacer 519',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqBLE55bRzEtZ2gkQe30Y5AHNJ4ucj61yNjX49HHLgcwlOl3ES0lvphrTf1fYy4nHPOdYEd5vXbWToyYrix38NTGgo3j9X0opXtoG9nY9ok_ZA7h_z6hAvsJSGkLKUlhOpTvOtKrJaBczhEzc0yt3fNX_SndEge1p-jQpxifQJY0HczcF_5DwhBFm51R1xuidvSHha565fNN5vm-sAtu9_NefkkRihXQTZ1LuZHLx5HPRphASgUFPbfzqiusVutDKxs68BLJuMLnjq',
  },
  {
    id: 12,
    category: 'upholstery',
    tag: 'Motor Trimming',
    title: 'Door Panels — GQ Patrol',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVzA6AvzLHKvMHHbmYjND-o_rK-l8fI_iAvdGFdxUdIz8Eu5l10Piu8twDZWP_9CytPUmmh1EIvCQ9ZXZPHlaeeC4r_FPw_L5J-GzZKYBS2_mgaVAT7MW_QXisfPt3Kg1uhx5IE2licLcN4VjoFutIN8Oreu1LYRwTiGwHaYXhzWi6rrCmFrX-Oz-kTeR9feX6sP2haCLPu_gl6OdCKArjfLaREK8UOt0ENYqpWVmXqCICqLqSflkp_JUbzmZdkGWAxb2QB9ANTb8Z',
  },
]

const filters = [
  { key: 'all', label: 'All Work' },
  { key: 'marine', label: 'Marine' },
  { key: 'motor', label: 'Motor' },
  { key: 'upholstery', label: 'Upholstery' },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <main style={{ padding: 'var(--rt-section-gap) 64px' }}>
      {/* Page Hero */}
      <div className="page-hero">
        <img src={HERO_IMG} alt="" />
        <div className="page-hero-content">
          <span className="page-hero-tag">Our Work</span>
          <h1>Project Portfolio</h1>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div>
            <div className="section-label">
              <span>Real Projects</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--rt-font-display)',
                fontSize: 40,
                fontWeight: 700,
                color: 'var(--rt-black)',
                letterSpacing: '-0.02em',
              }}
            >
              Built by Ram&apos;s Trimming
            </h2>
          </div>
          <div className="filter-bar">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filtered.map((item) => {
            const cls = [
              'portfolio-item',
              item.featured ? 'pi-featured' : '',
              item.tall ? 'pi-tall' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <div key={item.id} className={cls}>
                <img src={item.img} alt={item.title} />
                <div className="portfolio-item-overlay">
                  <div className="pi-tag">{item.tag}</div>
                  <div className="pi-title">{item.title}</div>
                </div>
              </div>
            )
          })}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: 'var(--rt-grey-mid)',
            marginTop: 48,
            fontFamily: 'var(--rt-font-mono)',
            letterSpacing: '0.06em',
          }}
        >
          A selection of recent work — more projects added regularly.
        </p>

        {/* CTA */}
        <div
          style={{
            background: 'var(--rt-black)',
            padding: 64,
            textAlign: 'center',
            marginTop: 80,
          }}
        >
          <span className="caps" style={{ color: 'var(--rt-white)' }}>
            Start Your Project
          </span>
          <h3
            style={{
              fontFamily: 'var(--rt-font-display)',
              fontSize: 36,
              color: 'var(--rt-white)',
              margin: '16px 0 32px',
              fontWeight: 700,
            }}
          >
            Want to see your project here?
          </h3>
          <Link href="/contact" className="btn btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:768px) { main { padding:60px 16px !important; } }
      `}</style>

      {/* FAB */}
      <a href="/contact" className="fab" aria-label="Contact us">
        <span className="material-symbols-outlined">mail</span>
      </a>
    </main>
  )
}
