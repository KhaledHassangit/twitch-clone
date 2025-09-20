import { UserAvatarProps, UserAvatarSkeletonProps } from '@/types/types'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Skeleton } from '../ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import LiveBadge from './LiveBadge'

export const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14",
            },
            defaultVariants: {
                size: "default"
            }
        }
    })

const UserAvatar = ({ username, imageUrl, isLive, showBadge, size }: UserAvatarProps) => {
    const ShowBadge = isLive && showBadge

    return (
        <div>
            <Avatar className={cn("", isLive && "ring-2 ring-offset-2 ring-rose-500 border-background", avatarSizes({ size }))}>
                <AvatarImage src={imageUrl} alt={username} className='object-cover' />
                <AvatarFallback>
                    {username[0]}
                    {username[username.length - 1]}
                </AvatarFallback>
            </Avatar>
            {
                ShowBadge && (
                    <div className='abosolute -bottom-3 left-1/2 transform 
                    -translate-x-1/2'>
                        <LiveBadge />

                    </div>

                )
            }
        </div>
    )
}

export default UserAvatar


export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
    return (
        <Skeleton className={cn("rounded-full", avatarSizes({ size }))} />
    )

}