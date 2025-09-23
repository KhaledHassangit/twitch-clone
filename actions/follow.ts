"use server"

import { followUser, unfollowUser } from "@/lib/FollowService"
import { revalidatePath } from "next/cache"


export const onFollow = async (id: string) => {
    try {
        const followedUser = await followUser(id)

        revalidatePath("/")
       if (followedUser && typeof followedUser !== "boolean") {
           revalidatePath(`/${followedUser.following.username}`)
       }
        return followedUser
    } catch (error) {
        throw error
    }
}
export const onUnfollow = async (id: string) => {
    try {
        const unfollowedUser = await unfollowUser(id)

        revalidatePath("/")
       if (unfollowedUser && typeof unfollowedUser !== "boolean") {
           revalidatePath(`/${unfollowedUser.following.username}`)
       }
        return unfollowedUser
    } catch (error) {
        throw error
    }
}