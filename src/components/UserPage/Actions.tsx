/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useTransition } from "react"
import { Button } from "../ui/button"
import { onFollow, onUnfollow } from "@/actions/follow"
import { toast } from 'sonner'
import { UserActionsProps } from "@/types/types"

const Actions = ({ isFollowing, userId }: UserActionsProps) => {

  const [isPending, startTransition] = useTransition()

  const handleFollow = () => {

    startTransition(() => {
      onFollow(userId)
        .then((data) => {
          if (typeof data === "object" && data !== null && "following" in data) {
            toast.success(`Followed ${(data as any).following.username}`)
          }
        })
        .catch(() => {
          toast.error("Error following user")
        })
    })
  }

  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => {
          if (typeof data === "object" && data !== null && "following" in data) {
            toast.success(`Unfollowed ${(data as any).following.username}`)
          }
        })
        .catch(() => {
          toast.error("Error following user")
        })
    })
  }
  const onClick = () => {
    if (isFollowing) {
      handleUnFollow()
    } else {
      handleFollow()
    }
  }
  return (
    <Button variant="primary" disabled={isPending} onClick={onClick}>
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  )
}

export default Actions
