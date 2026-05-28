import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: Request): Promise<Response> {
  try {
    const { source, name, email, phone, service, message } = await req.json()

    if (!name || !email) {
      return Response.json({ ok: false, error: 'Name and email are required.' }, { status: 400 })
    }

    const payload = await getPayload({ config })
    await payload.create({
      collection: 'enquiries',
      overrideAccess: true,
      data: { source, name, email, phone: phone || '', service: service || '', message: message || '' },
    })

    return Response.json({ ok: true })
  } catch (err) {
    return Response.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
