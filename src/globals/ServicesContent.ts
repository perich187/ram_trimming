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
      label: 'Service Sections',
      admin: {
        description: 'Edit the four main service sections — headers and card content',
        initCollapsed: true,
      },
      defaultValue: [
        { number: '01.', heading: 'Marine Trimming', accent: 'WATERPROOF EXCELLENCE' },
        { number: '02.', heading: 'Industrial Textiles', accent: 'HEAVY DUTY SOLUTIONS' },
        { number: '03.', heading: 'Custom Covers', accent: 'BESPOKE PROTECTION' },
        { number: '04.', heading: 'Motor Trimming', accent: 'AUTOMOTIVE CRAFT' },
      ],
      fields: [
        { name: 'number', type: 'text', admin: { description: 'e.g. 01.' } },
        { name: 'heading', type: 'text' },
        { name: 'accent', type: 'text', admin: { description: 'e.g. WATERPROOF EXCELLENCE' } },
        {
          name: 'darkCard',
          type: 'group',
          label: 'Dark Left Card',
          fields: [
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'badge1Icon', type: 'text', admin: { description: 'Material Symbols icon name, e.g. directions_boat' } },
            { name: 'badge1Label', type: 'text' },
            { name: 'badge2Icon', type: 'text', admin: { description: 'Material Symbols icon name, e.g. sailing' } },
            { name: 'badge2Label', type: 'text' },
          ],
        },
        {
          name: 'card1',
          type: 'group',
          label: 'White Card 1 (image on top)',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'items', type: 'textarea', admin: { description: 'One bullet point per line' } },
          ],
        },
        {
          name: 'card2',
          type: 'group',
          label: 'White Card 2',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'items', type: 'textarea', admin: { description: 'One bullet point per line' } },
          ],
        },
        {
          name: 'card3',
          type: 'group',
          label: 'White Card 3',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'items', type: 'textarea', admin: { description: 'One bullet point per line' } },
          ],
        },
        {
          name: 'card4',
          type: 'group',
          label: 'White Card 4',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'heading', type: 'text' },
            { name: 'description', type: 'textarea' },
            { name: 'items', type: 'textarea', admin: { description: 'One bullet point per line' } },
          ],
        },
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
        { name: 'phone', type: 'text', defaultValue: '0435 929 441' },
        { name: 'location', type: 'text', defaultValue: 'Fremantle, WA 6160' },
      ],
    },
  ],
}
