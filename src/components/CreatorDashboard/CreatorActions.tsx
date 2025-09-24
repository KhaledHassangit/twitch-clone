import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

const CreatorActions = () => {
  return (
    <div className='flex items-center justify-end gap-x-2'>
      <Button size={"sm"} variant="ghost" asChild className='text-muted-foreground hover:text-primary'>
        <Link href={"/"}>
          <LogOut className='h-5 w-5 mr-2' />
          Exit
        </Link>
      </Button>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default CreatorActions