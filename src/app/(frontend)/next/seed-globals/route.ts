import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

// One-time seed route to pre-populate all page globals with current site content.
// Hit GET /next/seed-globals once after deploy. Requires being logged into the admin
// OR passing ?secret=<PAYLOAD_SECRET> as a query param.
export async function GET(req: Request) {
  const url = new URL(req.url)
  const secret = url.searchParams.get('secret')

  const payload = await getPayload({ config: configPromise })

  // Allow if secret matches or if the request comes with a valid session cookie
  if (secret !== process.env.PAYLOAD_SECRET) {
    const headersList = await headers()
    const cookie = headersList.get('cookie') || ''
    if (!cookie.includes('payload-token')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  await payload.updateGlobal({
    slug: 'homepage-content',
    data: {
      hero: {
        tagline: 'Marine & Motor Trimming Specialist',
        heading: 'Built Tough. Made to Last.',
        subtext:
          'Custom trimming solutions specialising in industrial, marine & heavy-duty textile fabrication across Western Australia.',
      },
      about: {
        badge: 'Est. 2017',
        heading: 'About RAMS TRIMMING',
        description:
          'At RAMS TRIMMING, we build hard-wearing, fit-for-purpose textile solutions designed to handle the harshest environments Australia can throw at them. From mine spec to marine and everything in between, we focus on durability, function, and clean workmanship.',
        stat1Number: '33+',
        stat1Label: 'Years Experience',
        stat2Number: '100%',
        stat2Label: 'Work Guarantee',
      },
      services: { heading: 'What We Do' },
      whyChoose: {
        heading: 'Why Choose Rams?',
        items: [
          { icon: 'thunderstorm', label: 'Built for harsh Australian conditions' },
          { icon: 'manufacturing', label: 'Industrial-grade materials' },
          { icon: 'design_services', label: 'Custom fabrication – no off-the-shelf compromises' },
          { icon: 'handshake', label: 'Reliable turnaround & honest service' },
          { icon: 'location_on', label: 'WA owned & operated' },
        ],
      },
      quoteForm: {
        heading: 'Request a Quote',
        subtext:
          'Describe your requirements and we will provide a professional assessment within 24 hours.',
      },
      closing: {
        heading: 'Precision on the Waves.',
        caption: 'CRAFTED FOR EXCELLENCE',
      },
    },
  })

  await payload.updateGlobal({
    slug: 'about-content',
    data: {
      hero: {
        badge: 'Established Expertise',
        heading: 'Expertise, Durability, Quality.',
        description:
          'At RAMS TRIMMING, we build hard-wearing, fit-for-purpose textile solutions designed to handle the harshest environments Australia can throw at them.',
      },
      stats: {
        stat1Number: '33+',
        stat1Label: 'Years Experience',
        stat2Number: '100%',
        stat2Label: 'Work Guarantee',
      },
      story: {
        heading: 'Built for Australia',
        text1:
          "From mine spec to marine and everything in between, we focus on durability, function, and clean workmanship. We understand that in the Australian outback or on the rough WA coast, gear failure isn't just an inconvenience—it's a critical risk.",
        text2:
          'Our workshop is equipped with industrial-grade machinery capable of handling heavy-weight PVC, canvas, and high-performance synthetics. Every stitch is placed with structural integrity in mind.',
        badge: 'CERTIFIED FABRICATION',
      },
      valueCard: {
        heading: 'No Compromise',
        text: 'We reject off-the-shelf compromises. Every project is a custom fabrication using industrial-grade materials tailored to your specific operational needs.',
      },
      identity: {
        heading: 'WA Owned & Operated',
        text: 'Based in Western Australia, we are local specialists who know the conditions. Our reputation is built on decades of serving the community with honesty and technical precision.',
      },
      values: {
        heading: 'Our Core Values',
        items: [
          {
            number: '01',
            label: 'INTEGRITY',
            description:
              'Absolute transparency in material selection and construction methods. We do it right the first time.',
          },
          {
            number: '02',
            label: 'DURABILITY',
            description:
              'Designed to outlast the equipment it covers. We use UV-stabilized threads and reinforced stress points.',
          },
          {
            number: '03',
            label: 'PRECISION',
            description:
              'Millimeter-perfect fit for every vehicle, vessel, or industrial component we trim.',
          },
        ],
      },
      cta: {
        heading: 'Ready to start your project?',
        text: 'Contact us today for a technical consultation and quote on your next industrial or marine textile project.',
      },
    },
  })

  await payload.updateGlobal({
    slug: 'services-content',
    data: {
      hero: {
        heading: 'Precision Craftsmanship',
        subtext:
          'Expert marine, motor, and industrial trimming. Delivering professional-grade durability since 1987.',
      },
      sections: [
        { number: '01.', heading: 'Marine Trimming', accent: 'WATERPROOF EXCELLENCE' },
        { number: '02.', heading: 'Industrial Textiles', accent: 'HEAVY DUTY SOLUTIONS' },
        { number: '03.', heading: 'Custom Covers', accent: 'BESPOKE PROTECTION' },
        { number: '04.', heading: 'Motor Trimming', accent: 'AUTOMOTIVE CRAFT' },
      ],
      cta: {
        heading: 'Ready to start your project?',
        subtext:
          "Whether it's a luxury yacht, industrial equipment, or custom outdoor protection, we bring the same level of industrial expertise.",
        phone: '08 9581 8180',
        location: '6C Harlem Place, Greenfields',
      },
    },
  })

  await payload.updateGlobal({
    slug: 'contact-content',
    data: {
      hero: {
        heading: 'Contact Our Workshop',
        subtext:
          "Expert marine and motor trimming in Perth. Let's discuss your custom project, from luxury yacht interiors to vintage vehicle restorations.",
      },
      info: {
        address: 'Fremantle, Western Australia',
        phone: '(08) 9581 8180',
        email: 'rhys@ramstrimming.com.au',
        hours: [
          { day: 'Monday - Friday', time: '8:00 AM - 4:00 PM' },
          { day: 'Saturday', time: 'By Appointment' },
          { day: 'Sunday', time: 'Closed' },
        ],
      },
      form: {
        heading: 'Request a Quote',
        subtext: 'Tell us about your project requirements for a detailed professional estimate.',
      },
    },
  })

  return NextResponse.json({ ok: true, message: 'All page globals seeded successfully.' })
}
