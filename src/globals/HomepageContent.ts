import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const HomepageContent: GlobalConfig = {
  slug: 'homepage-content',
  access: { read: () => true },
  admin: {
    group: 'Page Content',
    description: 'Edit the Home page content',
  },
  hooks: {
    afterChange: [
      ({ req: { payload } }) => {
        revalidatePath('/')
        payload.logger.info('Revalidated: /')
      },
    ],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'tagline', type: 'text', defaultValue: 'Marine & Motor Trimming Specialist' },
        { name: 'heading', type: 'text', defaultValue: 'Built Tough. Made to Last.' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Custom trimming solutions specialising in industrial, marine & heavy-duty textile fabrication across Western Australia.',
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'About / Expertise Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'Est. 2017' },
        { name: 'heading', type: 'text', defaultValue: 'About RAMS TRIMMING' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'At RAMS TRIMMING, we build hard-wearing, fit-for-purpose textile solutions designed to handle the harshest environments Australia can throw at them. From mine spec to marine and everything in between, we focus on durability, function, and clean workmanship.',
        },
        { name: 'stat1Number', type: 'text', label: 'Stat 1 Number', defaultValue: '33+' },
        { name: 'stat1Label', type: 'text', label: 'Stat 1 Label', defaultValue: 'Years Experience' },
        { name: 'stat2Number', type: 'text', label: 'Stat 2 Number', defaultValue: '100%' },
        { name: 'stat2Label', type: 'text', label: 'Stat 2 Label', defaultValue: 'Work Guarantee' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'services',
      type: 'group',
      label: 'Services Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'What We Do' },
      ],
    },
    {
      name: 'whyChoose',
      type: 'group',
      label: 'Why Choose Rams Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Why Choose Rams?' },
        {
          name: 'items',
          type: 'array',
          label: 'Feature Items',
          admin: {
            description: 'Add feature bullet points. Icon uses Material Symbols names e.g. "thunderstorm"',
          },
          fields: [
            { name: 'icon', type: 'text' },
            { name: 'label', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'quoteForm',
      type: 'group',
      label: 'Quote Form Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Request a Quote' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Describe your requirements and we will provide a professional assessment within 24 hours.',
        },
      ],
    },
    {
      name: 'closing',
      type: 'group',
      label: 'Closing Atmospheric Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Precision on the Waves.' },
        { name: 'caption', type: 'text', defaultValue: 'CRAFTED FOR EXCELLENCE' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
