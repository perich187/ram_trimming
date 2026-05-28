import { getPayload } from 'payload'
import config from '@payload-config'
import { headers } from 'next/headers'

export const maxDuration = 60

export async function GET(req: Request): Promise<Response> {
  const payload = await getPayload({ config })

  // Allow if logged into the admin OR if the correct secret is passed
  const url = new URL(req.url)
  const secret = url.searchParams.get('secret')
  const requestHeaders = await headers()
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user && secret !== process.env.PAYLOAD_SECRET) {
    return new Response('Unauthorized — log into the admin first, or pass ?secret=', { status: 401 })
  }

  try {
    await payload.updateGlobal({
      slug: 'homepage-content',
      overrideAccess: true,
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
      overrideAccess: true,
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
      overrideAccess: true,
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
      overrideAccess: true,
      data: {
        hero: {
          heading: 'Contact Our Workshop',
          subtext:
            "Expert marine and motor trimming in Perth. Let's discuss your custom project, from luxury yacht interiors to vintage vehicle restorations.",
        },
        info: {
          address: 'Fremantle, WA 6160',
          phone: '0435 929 441',
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

    // ── Forms collection ─────────────────────────────────────────────────────
    const existingForms = await payload.find({
      collection: 'forms',
      where: { title: { in: ['Home Quote Form', 'Contact Form'] } },
      limit: 10,
      overrideAccess: true,
    })
    const existingFormTitles = new Set(existingForms.docs.map((f: any) => f.title))

    const confirmMsg = (text: string) => ({
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            direction: 'ltr',
            format: '',
            indent: 0,
            children: [{ type: 'text', text, version: 1, format: 0, mode: 'normal', style: '', detail: 0 }],
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    })

    if (!existingFormTitles.has('Home Quote Form')) {
      await payload.create({
        collection: 'forms',
        overrideAccess: true,
        data: {
          title: 'Home Quote Form',
          submitButtonLabel: 'SUBMIT MY REQUEST',
          fields: [
            { blockType: 'text', name: 'name', label: 'Full Name', required: true, width: 50 },
            { blockType: 'email', name: 'email', label: 'Email Address', required: true, width: 50 },
            {
              blockType: 'select',
              name: 'service',
              label: 'Service Type',
              options: [
                { label: 'Marine Trimming', value: 'Marine Trimming' },
                { label: 'Motor Body Trimming', value: 'Motor Body Trimming' },
                { label: 'Custom Upholstery', value: 'Custom Upholstery' },
                { label: 'Repairs & Maintenance', value: 'Repairs & Maintenance' },
              ],
            },
            { blockType: 'textarea', name: 'message', label: 'Project Details' },
          ],
          confirmationType: 'message',
          confirmationMessage: confirmMsg("Thanks! We'll be in touch within 24 hours."),
          emails: [],
        } as any,
      })
    }

    if (!existingFormTitles.has('Contact Form')) {
      await payload.create({
        collection: 'forms',
        overrideAccess: true,
        data: {
          title: 'Contact Form',
          submitButtonLabel: 'Submit Request',
          fields: [
            { blockType: 'text', name: 'name', label: 'Full Name', required: true, width: 50 },
            { blockType: 'email', name: 'email', label: 'Email Address', required: true, width: 50 },
            { blockType: 'text', name: 'phone', label: 'Phone Number', width: 50 },
            {
              blockType: 'select',
              name: 'service',
              label: 'Type of Work',
              width: 50,
              options: [
                { label: 'Marine', value: 'Marine' },
                { label: 'Industrial', value: 'Industrial' },
                { label: 'Custom', value: 'Custom' },
              ],
            },
            { blockType: 'textarea', name: 'message', label: 'Project Details' },
          ],
          confirmationType: 'message',
          confirmationMessage: confirmMsg("Thank you! We'll get back to you within 24 hours."),
          emails: [],
        } as any,
      })
    }

    // ── Services collection ───────────────────────────────────────────────────
    // Only seed if no services exist yet
    const existing = await payload.find({ collection: 'services', limit: 1 })
    if (existing.totalDocs === 0) {
      const serviceData = [
        {
          title: 'Marine Trimming',
          category: 'marine' as const,
          icon: 'directions_boat',
          description: 'Custom marine upholstery, biminis, covers, and full boat interior trimming using UV-resistant, waterproof materials built for WA conditions.',
          order: 1,
        },
        {
          title: 'Industrial Textiles',
          category: 'industrial' as const,
          icon: 'factory',
          description: 'Heavy-duty PVC, canvas, and synthetic fabric solutions for mining, construction, and industrial applications. Mine-spec quality guaranteed.',
          order: 2,
        },
        {
          title: 'Custom Covers',
          category: 'custom' as const,
          icon: 'deployed_code',
          description: 'Precision-fitted covers for boats, equipment, vehicles, and machinery using premium WeatherMax and Sunbrella fabrics.',
          order: 3,
        },
        {
          title: 'Motor Trimming',
          category: 'motor' as const,
          icon: 'directions_car',
          description: 'Automotive interior restoration and custom upholstery for cars, trucks, and 4WDs. Leather, vinyl, and fabric options available.',
          order: 4,
        },
      ]
      for (const svc of serviceData) {
        await payload.create({ collection: 'services', overrideAccess: true, data: svc })
      }
    }

    return Response.json({ ok: true, message: 'All page globals and services seeded successfully.' })
  } catch (err) {
    payload.logger.error({ err, message: 'Error seeding globals' })
    return new Response(`Error seeding globals: ${err instanceof Error ? err.message : String(err)}`, { status: 500 })
  }
}
