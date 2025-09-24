import { ToggleCardSkelton } from '@/components/Chat/ToggleCard'
import { Skeleton } from '@/components/ui/skeleton'


const ChatLoading = () => {
    return (
        <div className='p-6 space-y-4'>
            <Skeleton className='h-10 w-[200px]' />
            <div className=' space-y-4'>
                <ToggleCardSkelton />
                <ToggleCardSkelton />
                <ToggleCardSkelton />
            </div>
        </div>
    )
}

export default ChatLoading