import { headers } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url)
  const secret = url.searchParams.get('secret')
  const requestHeaders = await headers()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user && secret !== process.env.PAYLOAD_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN
  const db = process.env.DATABASE_URI

  return Response.json({
    blob: {
      tokenSet: !!token,
      tokenPrefix: token ? token.substring(0, 20) + '...' : null,
      pluginActive: !!(token && token !== 'your-vercel-blob-token'),
    },
    db: {
      uriSet: !!db,
    },
    nodeEnv: process.env.NODE_ENV,
  })
}
