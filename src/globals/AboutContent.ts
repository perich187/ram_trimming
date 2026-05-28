import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const AboutContent: GlobalConfig = {
  slug: 'about-content',
  access: { read: () => true },
  admin: {
    group: 'Page Content',
    description: 'Edit the About page content',
  },
  hooks: {
    afterChange: [
      ({ req: { payload } }) => {
        revalidatePath('/about')
        payload.logger.info('Revalidated: /about')
      },
    ],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Established Expertise' },
        { name: 'heading', type: 'text', defaultValue: 'Expertise, Durability, Quality.' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'At RAMS TRIMMING, we build hard-wearing, fit-for-purpose textile solutions designed to handle the harshest environments Australia can throw at them.',
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'stats',
      type: 'group',
      label: 'Stats Bar',
      fields: [
        { name: 'stat1Number', type: 'text', defaultValue: '33+' },
        { name: 'stat1Label', type: 'text', defaultValue: 'Years Experience' },
        { name: 'stat2Number', type: 'text', defaultValue: '100%' },
        { name: 'stat2Label', type: 'text', defaultValue: 'Work Guarantee' },
      ],
    },
    {
      name: 'story',
      type: 'group',
      label: 'Story Card',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Built for Australia' },
        {
          name: 'text1',
          type: 'textarea',
          defaultValue:
            "From mine spec to marine and everything in between, we focus on durability, function, and clean workmanship. We understand that in the Australian outback or on the rough WA coast, gear failure isn't just an inconvenience—it's a critical risk.",
        },
        {
          name: 'text2',
          type: 'textarea',
          defaultValue:
            'Our workshop is equipped with industrial-grade machinery capable of handling heavy-weight PVC, canvas, and high-performance synthetics. Every stitch is placed with structural integrity in mind.',
        },
        { name: 'badge', type: 'text', defaultValue: 'CERTIFIED FABRICATION' },
      ],
    },
    {
      name: 'valueCard',
      type: 'group',
      label: 'Value Proposition Card',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'No Compromise' },
        {
          name: 'text',
          type: 'textarea',
          defaultValue:
            'We reject off-the-shelf compromises. Every project is a custom fabrication using industrial-grade materials tailored to your specific operational needs.',
        },
      ],
    },
    {
      name: 'identity',
      type: 'group',
      label: 'Identity Card (WA Owned)',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'WA Owned & Operated' },
        {
          name: 'text',
          type: 'textarea',
          defaultValue:
            'Based in Western Australia, we are local specialists who know the conditions. Our reputation is built on decades of serving the community with honesty and technical precision.',
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'values',
      type: 'group',
      label: 'Core Values Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Our Core Values' },
        {
          name: 'items',
          type: 'array',
          label: 'Value Items',
          fields: [
            { name: 'number', type: 'text' },
            { name: 'label', type: 'text' },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Ready to start your project?' },
        {
          name: 'text',
          type: 'textarea',
          defaultValue:
            'Contact us today for a technical consultation and quote on your next industrial or marine textile project.',
        },
      ],
    },
  ],
}
