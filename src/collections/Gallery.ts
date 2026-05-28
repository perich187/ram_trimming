import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Marine', value: 'marine' },
        { label: 'Motor', value: 'motor' },
        { label: 'Industrial', value: 'industrial' },
        { label: 'Special', value: 'special' },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'tag', type: 'text', admin: { description: 'Short tag label shown on the card, e.g. "Yacht Interior"' } },
    { name: 'description', type: 'textarea' },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { description: 'Show as a featured item in the gallery grid' } },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
