import ToggleCard from '@/components/Chat/ToggleCard'
import { getSelf } from '@/lib/authService'
import { getStreamByUserId } from '@/lib/StreamService'

const ChatPage = async() => {
    const self = await getSelf()
    const stream = await getStreamByUserId(self?.id || '')

  return (
    <section className='p-6 '>
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Chat Settings</h1>
        </div>
        <div className='space-y-4'>
            <ToggleCard field="isChatEnabled" label="Enable Chat" value={stream?.isChatEnabled as boolean} />
            <ToggleCard field="isChatDelayed" label="Chat Delay" value={stream?.isChatDelayed as boolean}/>
            <ToggleCard field="isChatFollowersOnly" label="Only Followers to chat"  value={stream?.isChatFollowersOnly as boolean} />
        </div>
    </section>
  )
}

export default ChatPage