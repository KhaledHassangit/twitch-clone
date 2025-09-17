"use client"
import { Props } from '@/types/types'
import { cn } from '@/lib/utils'
import { UseSideBar } from "@/store/UseSideBar"

const Wrapper = ({ children }: Props) => {

    const { collapsed } = UseSideBar((state) => state)

    return (
        <aside className={cn(`fixed left-0 flex flex-col w-60 h-full bg-background border-r
        border-[#2d2e35] z-50` , collapsed && "w-[70px]")}>
            {children}
        </aside>
    )
}

export default Wrapper
