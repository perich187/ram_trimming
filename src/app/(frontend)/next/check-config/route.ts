export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url)
  const secret = url.searchParams.get('secret')

  if (secret !== process.env.PAYLOAD_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  const token = process.env.BLOB_READ_WRITE_TOKEN
  const db = process.env.DATABASE_URI

  return Response.json({
    blob: {
      tokenSet: !!token,
      tokenPrefix: token ? token.substring(0, 24) + '...' : 'NOT SET',
      pluginActive: !!(token && token !== 'your-vercel-blob-token'),
    },
    db: {
      uriSet: !!db,
      uriPrefix: db ? db.substring(0, 20) + '...' : 'NOT SET',
    },
    nodeEnv: process.env.NODE_ENV,
  })
}
