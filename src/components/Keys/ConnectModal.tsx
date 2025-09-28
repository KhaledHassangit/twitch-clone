import { useState, useTransition, useRef } from 'react'
import { createIngress } from '@/actions/ingress'
import { IngressInput } from 'livekit-server-sdk'
import { AlertTriangle } from 'lucide-react'
import { toast } from 'sonner'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const RTMP = String(IngressInput.RTMP_INPUT)
const WHIP = String(IngressInput.WHIP_INPUT)
type IngressType = typeof RTMP | typeof WHIP


const ConnectModal = () => {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [isPending, startTransition] = useTransition()
  const [ingressType, setIngressType] = useState<IngressType>(RTMP)

  const onSubmit = () => {
    startTransition(() => {
      createIngress(parseInt(ingressType))
        .then(() => {
          toast.success("Ingress created successfully ")
          closeRef?.current?.click()
        })
        .catch((err) => {
          toast.error("Failed to create ingress : " + err.message)
        })
    })
  }

  return (
    <Dialog>
      
      <DialogTrigger asChild>
        <Button variant="primary">Generate Connection</Button>
      </DialogTrigger>

      <DialogContent>

        <DialogHeader>
          <DialogTitle>Generate Connection</DialogTitle>
        </DialogHeader>

        <Select value={ingressType} disabled={isPending}
          onValueChange={(value) => setIngressType(value)}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder="Ingress Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={RTMP}>
              RTMP
            </SelectItem>
            <SelectItem value={WHIP}>
              WHIP
            </SelectItem>
          </SelectContent>
        </Select>

        <Alert className="mt-4">
          <AlertTriangle className='w-4 h-4' />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will reset all active streams using the current connection
          </AlertDescription>
        </Alert>

        <div className=" flex justify-between">
          <DialogClose asChild ref={closeRef}>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="primary" onSubmit={onSubmit} disabled={isPending}>Generate</Button>
        </div>

      </DialogContent>

    </Dialog>
  )
}

export default ConnectModal
