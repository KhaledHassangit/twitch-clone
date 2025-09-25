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
import { AlertTriangle } from 'lucide-react'
import { Select , SelectContent , SelectItem , SelectTrigger , SelectValue} from '../ui/select'

const ConnectModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Generate Connection</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Connection</DialogTitle>
        </DialogHeader>

        <Select>
            <SelectTrigger className='w-full'>
                <SelectValue placeholder="Ingress Type"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='RTMP'>
                    RTMP
                </SelectItem>
                <SelectItem value='WHIP'>
                    WHIP
                </SelectItem>
            </SelectContent>
        </Select>

        <Alert className="mt-4">
            <AlertTriangle className='w-4 h-4'/>
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>
            This action will reset all active streams using the current connection
          </AlertDescription>
        </Alert>

        <div className=" flex justify-between">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="primary">Generate</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ConnectModal
