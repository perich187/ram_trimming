import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: Request): Promise<Response> {
  try {
    const { source, name, email, phone, service, message } = await req.json()

    if (!name || !email) {
      return Response.json({ ok: false, error: 'Name and email are required.' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // Save to our custom enquiries collection
    await payload.create({
      collection: 'enquiries',
      overrideAccess: true,
      data: { source, name, email, phone: phone || '', service: service || '', message: message || '' },
    })

    // Also save to Payload's form-submissions collection so submissions
    // appear linked to the correct form in the admin UI
    const formTitle = source === 'home-quote' ? 'Home Quote Form' : 'Contact Form'
    const forms = await payload.find({
      collection: 'forms',
      where: { title: { equals: formTitle } },
      limit: 1,
      overrideAccess: true,
    })

    if (forms.docs.length > 0) {
      const form = forms.docs[0]
      const submissionData: { field: string; value: string }[] = [
        { field: 'name', value: name },
        { field: 'email', value: email },
      ]
      if (phone) submissionData.push({ field: 'phone', value: phone })
      if (service) submissionData.push({ field: 'service', value: service })
      if (message) submissionData.push({ field: 'message', value: message })

      await payload.create({
        collection: 'form-submissions',
        overrideAccess: true,
        data: { form: form.id, submissionData } as any,
      })
    }

    return Response.json({ ok: true })
  } catch (err) {
    return Response.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
