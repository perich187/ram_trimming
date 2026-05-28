import { getPayload } from 'payload'
import config from '@payload-config'

export const maxDuration = 60

export async function GET(): Promise<Response> {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  const db = process.env.DATABASE_URI
  const secret = process.env.PAYLOAD_SECRET

  let payloadOk = false
  let payloadError = ''

  try {
    const payload = await getPayload({ config })
    await payload.findGlobal({ slug: 'homepage-content', depth: 0 })
    payloadOk = true
  } catch (e: any) {
    payloadError = e?.message || String(e)
  }

  return Response.json({
    blob: {
      tokenSet: !!token,
      tokenPrefix: token ? token.substring(0, 20) + '...' : 'NOT SET — blob uploads will fail',
      pluginActive: !!(token && token !== 'your-vercel-blob-token'),
    },
    db: { uriSet: !!db },
    payloadSecret: { set: !!secret },
    payload: { ok: payloadOk, error: payloadError || null },
    nodeEnv: process.env.NODE_ENV,
  })
}
