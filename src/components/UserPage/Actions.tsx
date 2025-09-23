/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useTransition } from "react"
import { Button } from "../ui/button"
import { onFollow, onUnfollow } from "@/actions/follow"
import { toast } from 'sonner'
import { UserActionsProps } from "@/types/types"
import { onBlock, onUnBlock } from "@/actions/block"

const Actions = ({ isFollowing, userId, isBlocked }: UserActionsProps) => {

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

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId).then((data) => {
        toast.success(`Blocked ${(data as any).blocked.username}`)
      })
        .catch(() => {
          toast.error("Error blocking user")
        })
    })
  }
  const handleUnBlock = () => {
    startTransition(() => {
      onUnBlock(userId).then((data) => {
        toast.success(`Unblocked ${(data as any).unblocked.username}`)
      })
        .catch(() => {
          toast.error("Error unblocking user")
        })
    })
  }
  const onClickBlock = () => {
    if (isBlocked) {
      handleUnBlock()
    } else {
      handleBlock()
    }
  }
  return (
    <>
      <Button variant="primary" disabled={isPending} onClick={onClick}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>

      <Button disabled={isPending} onClick={onClickBlock}>
        {isBlocked ? "Un Block" : "Block"}
      </Button>
    </>
  )
}

export default Actions
