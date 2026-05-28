import { getPayload } from 'payload'
import config from '@payload-config'
import { Resend } from 'resend'

const NOTIFY_EMAILS = (process.env.NOTIFICATION_EMAIL || 'rhys@ramstrimming.com.au')
  .split(',')
  .map((e) => e.trim())
  .filter(Boolean)
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@ramstrimming.com.au'

export async function POST(req: Request): Promise<Response> {
  try {
    const { source, name, email, phone, service, message } = await req.json()

    if (!name || !email) {
      return Response.json({ ok: false, error: 'Name and email are required.' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    // 1. Save to our enquiries collection
    await payload.create({
      collection: 'enquiries',
      overrideAccess: true,
      data: { source, name, email, phone: phone || '', service: service || '', message: message || '' },
    })

    // 2. Also link to Payload form-builder submission so it shows in admin
    const formTitle = source === 'home-quote' ? 'Home Quote Form' : 'Contact Form'
    const forms = await payload.find({
      collection: 'forms',
      where: { title: { equals: formTitle } },
      limit: 1,
      overrideAccess: true,
    })
    if (forms.docs.length > 0) {
      const submissionData: { field: string; value: string }[] = [
        { field: 'name', value: name },
        { field: 'email', value: email },
        ...(phone ? [{ field: 'phone', value: phone }] : []),
        ...(service ? [{ field: 'service', value: service }] : []),
        ...(message ? [{ field: 'message', value: message }] : []),
      ]
      await payload.create({
        collection: 'form-submissions',
        overrideAccess: true,
        data: { form: forms.docs[0].id, submissionData } as any,
      })
    }

    // 3. Send email notification via Resend (only if API key is configured)
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const resend = new Resend(resendKey)
      const label = source === 'home-quote' ? 'Home Quote' : 'Contact Page'

      await resend.emails.send({
        from: `RAMS Trimming Website <${FROM_EMAIL}>`,
        to: NOTIFY_EMAILS,
        replyTo: email,
        subject: `New ${label} enquiry from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#1a1c1d;padding:24px 32px">
              <h1 style="color:#fff;font-size:20px;margin:0">New Enquiry — RAMS Trimming</h1>
            </div>
            <div style="padding:32px;border:1px solid #e2e2e3">
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#5d5e66;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#5d5e66">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding:8px 0;color:#5d5e66">Phone</td><td style="padding:8px 0"><a href="tel:${phone}">${phone}</a></td></tr>` : ''}
                ${service ? `<tr><td style="padding:8px 0;color:#5d5e66">Service</td><td style="padding:8px 0">${service}</td></tr>` : ''}
                ${message ? `<tr><td style="padding:8px 0;color:#5d5e66;vertical-align:top">Details</td><td style="padding:8px 0">${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
                <tr><td style="padding:8px 0;color:#5d5e66">Source</td><td style="padding:8px 0">${label}</td></tr>
              </table>
              <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e2e2e3">
                <a href="https://rams-trimming.vercel.app/admin/collections/enquiries" style="background:#1a1c1d;color:#fff;padding:12px 24px;text-decoration:none;font-size:13px;letter-spacing:0.05em">VIEW IN ADMIN →</a>
              </div>
            </div>
          </div>
        `,
      })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('submit-form error:', err)
    return Response.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
