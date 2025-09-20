"use client"
import { cn } from '@/lib/utils'
import { Props } from '@/types/types'
import { UseSideBar } from "@/store/UseSideBar"
import { TooggleButtonSkeleton } from './ToggleButton'
import { RecommendedSkeleton } from './Recommended'
import { useIsClient } from 'usehooks-ts'

const Wrapper = ({ children }: Props) => {

    const { collapsed } = UseSideBar((state) => state)
    const isClient = useIsClient()


    if (!isClient) return (
        <aside className={cn(`fixed left-0 flex flex-col w-60 h-full bg-background border-r
        border-[#2d2e35] z-50`)}>
            <TooggleButtonSkeleton />
            <RecommendedSkeleton />
        </aside>
    )

    return (
        <aside className={cn(`fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r
        border-[#2d2e35] z-50` , collapsed && "w-[70px]")}>
            {children}
        </aside>
    )
}

export default Wrapper
