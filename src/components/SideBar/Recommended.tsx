"use client"

import { UseSideBar } from '@/store/UseSideBar'
import UserItem, { UserItemSkeleton } from './UserItem'
import { User } from '@prisma/client'

const Recommended = ({ data }: { data: User[] }) => {
    console.log(data)
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
                           isLive={true} />
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
