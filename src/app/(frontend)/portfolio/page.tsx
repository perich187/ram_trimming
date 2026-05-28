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
    title: 'Custom Yacht Bimini',
    desc: 'Sunbrella marine fabric with stainless steel hardware and clear-view clears.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhhmU7cahxBWFkOpomynRWEMWPLMCSfLd4R0YxtXe-u3XWnABnDxNlD1TaGcOR22piXPaQloHnu4OtAZx4SHVRc3XxZhPCN_dn2HhEOA5NIKwn4R8EG-kBlk4QoCPAJEEosSPwCFiJYSq5IIW-xm50rQZLNo77avxDXqL77cLveZR_helku3lstLaGReu5ydFr_9D42e9qxUawJiNVeij8xkjHSqG9GcrCxSxuaNPGzcPStw4KtwmMg9wpQkrVKMf4xJxHHfIS-Zw-',
  },
  {
    id: 2,
    category: 'motor',
    tag: 'Motor Trimming',
    title: 'Vintage Porsche Interior',
    desc: 'Full Napa leather restoration with hand-stitched diamond patterns and wool carpets.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZmLNTQu0Q5uBu_ZBOl5hGCDfX8I_FF0DOHv-QTFpj58LSTgg2vRuaJm4DdqPz9UXDTqzwtL97S15qgwn6o0EWpF-N9NkW6vYQjnfFSIpkiO1ZLyGPKwbPmaZ0cX99OQW7_Ih7hszBz6p_yHuD6NRRdfzN-MlF0JHAwB-s1dCR3NNm1QB66HejNQqie78kxP9SLBUHPktr5SNo5H75OlM3HR1mDdCXP1hQZQFbxo5jxjLF_1_VvUgnk3n_U94oV9GLfOXVjTJp3j8b',
  },
  {
    id: 3,
    category: 'marine',
    tag: 'Marine Grade',
    title: 'Speedboat Bolster Seats',
    desc: 'Heavy-duty UV resistant vinyl with high-density antimicrobial foam inserts.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN5lgC4cDePg9HbY5KHDnGCZncl4l8kLCRLRs3-vGQK3XW5WhcxR3Dd6kKE1Y_IC-8VjJcbgjxO48cnwhDVmkwdvfIS-i7_I-j06nzG_xwtQtlrnJjI91SzgI3qLW2KdRVtlTpq2Mx37zx3mOv2idoGyXUWIXcve1U6xnWjiU2WKvAtEHR-V1-nG4uCM684eMfnpWZv1A67PXwIPo1f0O9ceRrgcDLuoypHO5htK7fT07KTGEXLe94fbT_gOZczLMT_yA1qC9ZNnxn',
  },
  {
    id: 4,
    category: 'special',
    tag: 'Special Project',
    title: 'Industrial Canopy System',
    desc: 'Reinforced PVC-coated polyester with thermal-welded seams for maximum durability.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCndJ4xMeKwn5_z6m3uSmODAj80vlBCPH2aoCHBmW_68jbe5pADnEqN6ExOaFUjngtQKD16EXVlOEOXLPmo4q557WqNxYVOtzxsNOId_Bp603heQPHsBvgjoqHpAc_YehvrXoYOENto36MDPd2fr5e7ZwozVn0tRpnb4TSF_zN18sZBC1sHADbuBLFQ7EZpfCaMt-YQaFQQxtiIobPmCDTvBtpC5n6bGwPicoz_wA9OzTqXTXp3bW34KDivZokodjTXTJ1mX4Wu1nXk',
  },
  {
    id: 5,
    category: 'motor',
    tag: 'Motor Trimming',
    title: 'Custom Truck Cabin',
    desc: 'Leather-wrapped dashboard and custom headliner with integrated lighting.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMaK5yA7c4jB5fl6jTaoYMPdydKGo_xHtHa7TCi2XjOe197HzIwnVeQ2bTwbiUVgRKsmQ1G1LqGVcAIgASTNPGQ8AuRwn9k6-H-AUgYmeABet7B0w7FfTOhFUC5JkbKp2OUn4y4cPTyJaf2ltJNChYwLk-F9BpBGaBKwnv9Vda5Y0gYyk4mOOzIQqAjHc6xUvnvZC',
  },
  {
    id: 6,
    category: 'marine',
    tag: 'Marine Grade',
    title: 'Full Boat Cover',
    desc: 'Weather-max 80 performance fabric with custom ventilation system.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk2vszMYxgygr0HutDMUMdvyRzaxtBCUfQLT-E8sxSpGt1Wao1WePSfI2qlU6RRMQmQpW3Yt1oOndXP3V90NK8QHVx_5xat2mBlbcLCJ1718nXIYwRoWoCK6Be55698TmsieVYSYnSwfW7kCACOniemSHCHxXdg-oky7YxXpb3c5nijD5QVSIedX1etd6NoMeuFpoQjZsB8AjYMXJgOah8jUB3GJ998C_sOEz6tfwTO1hEShDmwNpDqX8SoWvpxDH_1REKUqI1fWgc',
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
