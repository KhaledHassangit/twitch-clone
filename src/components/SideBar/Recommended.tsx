"use client"

import { UseSideBar } from '@/store/UseSideBar'
import UserItem, { UserItemSkeleton } from './UserItem'
import { RecommendedProps } from '@/types/types'


const Recommended = ({ data }: RecommendedProps) => {

    const { collapsed } = UseSideBar((state) => state)

    const showLabel = !collapsed && data?.length > 0

    return (
        <div className='space-y-4 lg:pt-0'>
            {showLabel && (
                <div className='pl-6 mb-4'>
                    <p className='text-sm text-muted-foreground'>
                        Recommended
                    </p>
                </div>
            )}
            <ul className='space-y-2 px-2'>
                {
                    data?.map((user) => {
                        return (
                          <UserItem key={user.id} {...user}
                           isLive={user.stream?.isLive as boolean} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Recommended


export const RecommendedSkeleton = () => {
    return (
        <ul className='px-2'>
            {[...Array(3).map((_,i) => {
                return (
                    <UserItemSkeleton key={i}/>
                )
            })]}
        </ul>
    )
}
