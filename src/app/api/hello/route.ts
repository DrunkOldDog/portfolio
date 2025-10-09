import type { NextRequest } from 'next/server'

type Data = {
  name: string
}

export async function GET(request: NextRequest) {
  return Response.json({ name: 'John Doe' })
}
