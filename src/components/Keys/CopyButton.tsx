"use client"

import { useState, useRef } from "react"
import { Button } from "../ui/button"
import { CheckCheck, CopyIcon } from "lucide-react"

const CopyButton = ({ value }: { value?: string }) => {

    const [isCopied, setIsCopeied] = useState<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const onCopy = () => {

    if (!value) return

    setIsCopeied(true)
    navigator.clipboard.writeText(value)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsCopeied(false)
    }, 1000)
  }
  const Icon = isCopied ? CheckCheck : CopyIcon
    return (
        <Button disabled={!value || isCopied} onClick={onCopy} size="sm" variant={"ghost"}>
            <Icon className="h-4 w-4"/>
        </Button>
    )
}

export default CopyButton