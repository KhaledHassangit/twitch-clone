/* eslint-disable @typescript-eslint/no-empty-object-type */
import { avatarSizes } from "@/components/SideBar/UserAvatar";
import { type VariantProps } from "class-variance-authority";

export interface Props {
    children: React.ReactNode
}



export interface SideBarStore {
    collapsed:boolean;
    onExpand:() => void
    onCollapse:() => void
}


export interface HintProps {
    label:string;
    children:React.ReactNode;
    asChild?:boolean;
    side?:"top" | "bottom" | "left" | "right";
    align?:"start" | "center" | "end"
}

export interface UserItemProps{
    username:string;
    imageUrl:string;
    isLive:boolean
}

export interface UserAvatarProps extends UserItemProps, VariantProps<typeof avatarSizes>{
    showBadge?:boolean
}
export interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes>{
    
}
export interface UserPageProps {
    params:{
        username:string
    }
}

export interface UserActionsProps {
    isFollowing:boolean
    userId:string
}