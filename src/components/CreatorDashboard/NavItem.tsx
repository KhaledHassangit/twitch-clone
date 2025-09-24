"use client"
import { UseCreatorSideBar } from "@/store/UseCreatorSideBar"
import { NavItemProps } from "@/types/types"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Skeleton } from "../ui/skeleton"

const NavItem = ({ label, icon: Icon, href, isActive }: NavItemProps) => {

    const { collapsed } = UseCreatorSideBar()
    return (
        <Button asChild variant={"ghost"} className={cn("w-full h-12",
             collapsed ? "justify-center" : "justify-start", isActive && "bg-accent")}>
            <Link href={href}>
                <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>{label}</span> }
            </Link>
        </Button>
    )
}

export default NavItem





export const NavItemSkeleton = () =>{
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            <Skeleton className="min-h-[48px] min-w-[48px] rounded-md"/>
            <div className="flex-1 hidden lg:block">
                <Skeleton className="h-6"/>
            </div>
        </li>
    )
}