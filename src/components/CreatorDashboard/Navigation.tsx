"use client"
import { useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { KeyRound, Fullscreen, MessageSquare, Users } from "lucide-react"
import NavItem, { NavItemSkeleton } from "./NavItem"


const Navigation = () => {

    const pathName = usePathname()
    const { user } = useUser()
    if (!user?.username) {
        return (
            <ul>
                {
                    [...Array(4)].map((_, index) => (
                        <NavItemSkeleton key={index} />
                    ))
                }
            </ul>
        )
    }

    const routes = [
        {
            label: "Stream",
            href: `/u/${user?.username}`,
            icon: Fullscreen,
        },
        {
            label: "Keys",
            href: `/u/${user?.username}/keys`,
            icon: KeyRound,
        },
        {
            label: "Chat",
            href: `/u/${user?.username}/chat`,
            icon: MessageSquare,
        },
        {
            label: "Community",
            href: `/u/${user?.username}/community`,
            icon: Users,
        },
    ]

    return (
        <ul>
            {
                routes.map((route) => (
                    <NavItem
                        key={route.href}
                        label={route.label}
                        icon={route.icon}
                        href={route.href}
                        isActive={pathName === route.href} />

                ))
            }
        </ul>
    )
}

export default Navigation