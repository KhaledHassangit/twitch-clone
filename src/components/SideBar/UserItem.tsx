"use client"
import { UserItemProps } from '@/types/types'
import { usePathname } from 'next/navigation'
import { UseSideBar } from '@/store/UseSideBar'
import { cn } from '@/lib/utils'
import { Skeleton } from '../ui/skeleton'
import { Button } from '../ui/button'
import Link from 'next/link'
import UserAvatar from './UserAvatar'
import LiveBadge from './LiveBadge'


const UserItem = ({username , imageUrl , isLive} : UserItemProps ) => {

    const pathname = usePathname()
    const { collapsed } = UseSideBar((state) => state)
    const href = `/${username}`
    const isActive = pathname === href

    return (
        <Button asChild variant={"ghost"} className={cn("w-full h-12",
        collapsed ? "justify-center" : "justify-start",
        isActive && "bg-accent"
        )}>
            <Link href={href}>
            <div className={cn("flex items-center w-full gap-x-4",
                collapsed && "justify-center"
            )}>
                <UserAvatar showBadge={true} imageUrl={imageUrl} username={username} isLive={isLive}/>
            </div>
            {!collapsed && (
                <p className='truncate'>{username}</p>
            )}
            {!collapsed && isLive && (
                <LiveBadge className='ml-auto'/>
            )}
            </Link>
        </Button>
    )
}

export default UserItem



export const UserItemSkeleton = () => {
    return (
        <li className='flex items-center gap-x-4 px-3 py-2'>
            <Skeleton className={cn("min-h-[32px] w-[32px] rounded-full")} />
            <div className='flex-1'>
                <Skeleton className='h-6 ' />
            </div>
        </li>
            
    )

}