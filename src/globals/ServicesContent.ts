import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const ServicesContent: GlobalConfig = {
  slug: 'services-content',
  access: { read: () => true },
  admin: {
    group: 'Page Content',
    description: 'Edit the Services page content',
  },
  hooks: {
    afterChange: [
      ({ req: { payload } }) => {
        revalidatePath('/services')
        payload.logger.info('Revalidated: /services')
      },
    ],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Precision Craftsmanship' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Expert marine, motor, and industrial trimming. Delivering professional-grade durability since 1987.',
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Service Section Headers',
      admin: {
        description: 'Edit the four main service section headings and accent labels',
        initCollapsed: true,
      },
      fields: [
        { name: 'number', type: 'text', admin: { description: 'e.g. 01.' } },
        { name: 'heading', type: 'text' },
        { name: 'accent', type: 'text', admin: { description: 'e.g. WATERPROOF EXCELLENCE' } },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Quote CTA Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Ready to start your project?' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            "Whether it's a luxury yacht, industrial equipment, or custom outdoor protection, we bring the same level of industrial expertise.",
        },
        { name: 'phone', type: 'text', defaultValue: '08 9581 8180' },
        { name: 'location', type: 'text', defaultValue: '6C Harlem Place, Greenfields' },
      ],
    },
  ],
}
