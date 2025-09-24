"use client"

import { ToggleCardProps } from '@/types/types'
import { Switch } from '../ui/switch'
import { toast } from 'sonner'
import { useTransition } from 'react'
import { updateStream } from '@/actions/stream'
import { Skeleton } from '../ui/skeleton'

const ToggleCard = ({ field, label, value }: ToggleCardProps) => {
    const [isPending, startTransition] = useTransition()

    const onChange = () => {
        startTransition(() => {
            updateStream({ [field]: !value })
                .then(() => {
                    toast.success("Stream updated successfully")
                })
                .catch(() => {
                    toast.error("Failed to update stream")
                })
        })
    }
    return (
        <div className='rounded-xl bg-muted p-6'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold shrink-0'>
                    {label}
                </p>
                <div className=''>
                    <Switch onCheckedChange={onChange} disabled={isPending} checked={value} className="space-y-2">
                        {value ? "On" : "Off"}
                    </Switch>
                </div>
            </div>

        </div>
    )
}

export default ToggleCard


export const ToggleCardSkelton = () => {
    return (
        <Skeleton className='rounded xl p-10 w-full' />
    )
}