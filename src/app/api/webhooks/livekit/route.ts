import { WebhookReceiver } from 'livekit-server-sdk'
import { db } from '@/lib/db'

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
)

export async function POST(req: Request) {

  try {
    const rawBody = await req.text()

    const authHeader = req.headers.get('authorization') || ''

    if (!authHeader) {
      return new Response('No authorization', { status: 400 })
    }

    const event = await receiver.receive(rawBody, authHeader)

    if (event.event === 'ingress_ended') {
      const ingressId = event.ingressInfo?.ingressId
      if (ingressId) {
        await db.stream.update({
          where: {
            ingressId: ingressId,
          },
          data: {
            isLive: false,
          },
        })
      }
    }
     
    if (event.event === 'ingress_started') {
      const ingressId = event.ingressInfo?.ingressId
      if (ingressId) {
        await db.stream.update({
          where: {
            ingressId: ingressId,
          },
          data: {
            isLive: true,
          },
        })
      }
    }

    return new Response('ok', { status: 200 })
  } catch (err) {
    console.error('Error handling LiveKit webhook:', err)
    return new Response('internal_server_error', { status: 500 })
  }
}
