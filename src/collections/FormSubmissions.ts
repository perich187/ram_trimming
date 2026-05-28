import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'enquiries',
  admin: {
    group: 'Enquiries',
    useAsTitle: 'email',
    description: 'Quote and contact form submissions from the website',
    defaultColumns: ['name', 'email', 'source', 'service', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  defaultSort: '-createdAt',
  fields: [
    {
      name: 'source',
      type: 'select',
      required: true,
      options: [
        { label: 'Home — Quote Form', value: 'home-quote' },
        { label: 'Contact Page', value: 'contact' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'service',
      type: 'text',
      label: 'Service Type',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Project Details',
    },
  ],
}
