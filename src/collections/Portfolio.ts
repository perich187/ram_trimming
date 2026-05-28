import type { CollectionConfig } from 'payload'

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Marine', value: 'marine' },
        { label: 'Motor', value: 'motor' },
        { label: 'Upholstery', value: 'upholstery' },
        { label: 'Special', value: 'special' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tag',
      type: 'text',
      admin: { description: 'Short tag label shown on the card, e.g. "Yacht Interior"' },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show as a featured (large) item in the portfolio grid',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
