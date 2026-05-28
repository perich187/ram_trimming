export async function GET(): Promise<Response> {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  const db = process.env.DATABASE_URI
  const secret = process.env.PAYLOAD_SECRET

  return Response.json({
    blob: {
      tokenSet: !!token,
      tokenPrefix: token ? token.substring(0, 20) + '...' : 'NOT SET — blob uploads will fail',
      pluginActive: !!(token && token !== 'your-vercel-blob-token'),
    },
    db: {
      uriSet: !!db,
    },
    payloadSecret: {
      set: !!secret,
    },
    nodeEnv: process.env.NODE_ENV,
  })
}
