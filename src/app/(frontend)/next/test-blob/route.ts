import { put } from '@vercel/blob'

export async function GET(): Promise<Response> {
  const token = process.env.BLOB_READ_WRITE_TOKEN

  if (!token) {
    return Response.json({ ok: false, error: 'BLOB_READ_WRITE_TOKEN not set' })
  }

  try {
    const result = await put('rams-test/test.txt', 'blob test ok', {
      access: 'public',
      token,
    })
    return Response.json({ ok: true, url: result.url })
  } catch (e: any) {
    return Response.json({ ok: false, error: e?.message || String(e) })
  }
}
