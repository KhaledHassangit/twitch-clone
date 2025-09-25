"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import CopyButton from "./CopyButton"

const KeyCard = ({ value }: { value: string | null }) => {
    const [show, setShow] = useState<boolean>(false)

    return (
        <div className='rounded-xl bg-muted p-6'>
            <div className='flex items-center gap-x-8'>
                <p className='font-semibold shrink-0'>
                    Stream Key
                </p>
            </div>
            <div className='space-y-2 w-full'>
                <div className='flex items-center gap-x-2 w-full'>
                    <Input
                        value={""}
                        disabled
                        type={show ? "text" : "password"}
                        placeholder='Stream Key' />
                    <CopyButton value={value || ""} />
                </div>
                <Button onClick={() => setShow(!show)} variant="link" size="sm">
                    {show ? "Hide" : "Show"}
                </Button>
            </div>

        </div>
    )
}

export default KeyCard