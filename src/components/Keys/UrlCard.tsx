import { Input } from '../ui/input'
import CopyButton from './CopyButton'

const UrlCard = ({ value }: { value: string | null}) => {

    return (
        <div className='rounded-xl bg-muted p-6'>
            <div className='flex items-center gap-x-8'>
                <p className='font-semibold shrink-0'>
                    Server URL
                </p>
                <div className='space-y-2 w-full'>
                    <div className='flex items-center gap-x-2 w-full'>
                        <Input
                        value={""}
                        disabled
                        placeholder='Server URL'/>
                    <CopyButton value={value || ""} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UrlCard 