import { UseSideBar } from '@/store/UseSideBar'
import { FollowProps } from '@/types/types'
import UserItem, { UserItemSkeleton } from './UserItem'




const Following = ({ data }: FollowProps) => {
    const { collapsed } = UseSideBar()

    if (!data.length) {
        return null
    }
    return (
        <div>
            {!collapsed && (
                <div className='pl-6 mb-4'>
                    <p className='text-sm text-muted-foreground'>
                        Following
                    </p>
                </div>
            )
            }
            <ul className='space-y-2 px-2'>
                {data.map((follow) => {
                    return (
                        <UserItem
                            key={follow.following.id}
                            username={follow.following.username}
                            imageUrl={follow.following.imageUrl}
                            isLive={true} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Following


export const FollowingSkeleton = () => {
    return (
        <ul className='px-2 pt-2 lg:pt-0'>
            {[...Array(3)].map((_, i) => {
                return (
                    <UserItemSkeleton key={i} />
                )
            })}
        </ul>
    )
}