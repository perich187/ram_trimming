import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const ContactContent: GlobalConfig = {
  slug: 'contact-content',
  access: { read: () => true },
  admin: {
    group: 'Page Content',
    description: 'Edit the Contact page content and business details',
  },
  hooks: {
    afterChange: [
      ({ req: { payload } }) => {
        revalidatePath('/contact')
        payload.logger.info('Revalidated: /contact')
      },
    ],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Contact Our Workshop' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            "Expert marine and motor trimming in Perth. Let's discuss your custom project, from luxury yacht interiors to vintage vehicle restorations.",
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'info',
      type: 'group',
      label: 'Contact Information',
      fields: [
        { name: 'address', type: 'text', defaultValue: 'Fremantle, Western Australia' },
        { name: 'phone', type: 'text', defaultValue: '(08) 9581 8180' },
        { name: 'email', type: 'text', defaultValue: 'rhys@ramstrimming.com.au' },
        {
          name: 'hours',
          type: 'array',
          label: 'Operating Hours',
          defaultValue: [
            { day: 'Monday - Friday', time: '8:00 AM - 4:00 PM' },
            { day: 'Saturday', time: 'By Appointment' },
            { day: 'Sunday', time: 'Closed' },
          ],
          fields: [
            { name: 'day', type: 'text' },
            { name: 'time', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'form',
      type: 'group',
      label: 'Quote Form',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Request a Quote' },
        {
          name: 'subtext',
          type: 'textarea',
          defaultValue:
            'Tell us about your project requirements for a detailed professional estimate.',
        },
      ],
    },
  ],
}
