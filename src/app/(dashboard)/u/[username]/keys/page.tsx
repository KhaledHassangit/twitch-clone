import ConnectModal from '@/components/Keys/ConnectModal'
import KeyCard from '@/components/Keys/KeyCard'
import UrlCard from '@/components/Keys/UrlCard'
import { getSelf } from '@/lib/authService'
import { getStreamByUserId } from '@/lib/StreamService'

const KeysPage = async () => {

    const self = await getSelf()
    const stream = await getStreamByUserId(self?.id || '')

    return (
        <section className='p-6'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className='text-2xl font-bold'>Keys & URLs</h1>
                <ConnectModal />
            </div>
            <div className='space-y-4'>
                <UrlCard value={stream?.serverUrl as string | null} />
                <KeyCard value={stream?.streamKey as string | null} />
            </div>
        </section>
    )
}

export default KeysPage