"use client"
import { useEffect } from 'react'
import { UseSideBar } from '@/store/UseSideBar'
import { Props } from '@/types/types'
import { cn } from '@/lib/utils'
import {useMediaQuery} from "usehooks-ts"

const Container = ({ children }: Props) => {

    const { collapsed , onCollapse , onExpand} = UseSideBar()

    const matches = useMediaQuery("(max-width:1024px)")

        useEffect(() => {
            if(matches){
                onCollapse()
            } else{
                 onExpand()
            }
        }, [matches,onCollapse,onExpand])
        
    return (
        <div className={cn("flex-1",collapsed ? "ml-[70px]" :"ml-[70px] lg:ml-60")}>
            {children}
        </div>
    )
}

export default Container
