import { getPayload } from 'payload'
import config from '@payload-config'

const CONTACT_FORM = {
  title: 'Contact Form',
  fields: [
    { blockType: 'text', name: 'name', label: 'Full Name', required: true, width: 50, placeholder: 'John Doe' },
    { blockType: 'email', name: 'email', label: 'Email Address', required: true, width: 50, placeholder: 'john@example.com' },
    { blockType: 'text', name: 'phone', label: 'Phone Number', required: false, width: 50, placeholder: '0400 000 000' },
    {
      blockType: 'select', name: 'service', label: 'Type of Work', required: false, width: 50,
      options: [
        { label: 'Marine Trimming', value: 'Marine Trimming' },
        { label: 'Motor Trimming', value: 'Motor Trimming' },
        { label: 'Industrial Textiles', value: 'Industrial Textiles' },
        { label: 'Custom Covers', value: 'Custom Covers' },
      ],
    },
    { blockType: 'textarea', name: 'message', label: 'Project Details', required: false, width: 100, placeholder: 'Describe the scope, materials, and any specific requirements...' },
  ],
  confirmationType: 'message',
}

const HOME_QUOTE_FORM = {
  title: 'Home Quote Form',
  fields: [
    { blockType: 'text', name: 'name', label: 'Full Name', required: true, width: 50, placeholder: 'John Smith' },
    { blockType: 'email', name: 'email', label: 'Email Address', required: true, width: 50, placeholder: 'john@example.com' },
    { blockType: 'text', name: 'phone', label: 'Phone Number', required: false, width: 50, placeholder: '0400 000 000' },
    {
      blockType: 'select', name: 'service', label: 'Service Type', required: false, width: 50,
      options: [
        { label: 'Marine Trimming', value: 'Marine Trimming' },
        { label: 'Motor Trimming', value: 'Motor Trimming' },
        { label: 'Industrial Textiles', value: 'Industrial Textiles' },
        { label: 'Custom Covers', value: 'Custom Covers' },
      ],
    },
    { blockType: 'textarea', name: 'message', label: 'Project Details', required: false, width: 100, placeholder: 'Describe your project — model, size, materials, any special requirements...' },
  ],
  confirmationType: 'message',
}

export async function GET(): Promise<Response> {
  try {
    const payload = await getPayload({ config })
    const results: Record<string, string> = {}

    for (const formDef of [CONTACT_FORM, HOME_QUOTE_FORM]) {
      const existing = await payload.find({
        collection: 'forms',
        where: { title: { equals: formDef.title } },
        limit: 1,
        overrideAccess: true,
      })

      if (existing.docs.length > 0) {
        // Update existing form fields
        await payload.update({
          collection: 'forms',
          id: existing.docs[0].id,
          overrideAccess: true,
          data: { fields: formDef.fields as any },
        })
        results[formDef.title] = `updated (id: ${existing.docs[0].id})`
      } else {
        const created = await payload.create({
          collection: 'forms',
          overrideAccess: true,
          data: formDef as any,
        })
        results[formDef.title] = `created (id: ${created.id})`
      }
    }

    return Response.json({ ok: true, results })
  } catch (err) {
    return Response.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
