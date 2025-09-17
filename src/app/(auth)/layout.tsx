import Logo from '@/components/NavBar/Logo'
import { Props } from '@/types/types'
import React from 'react'

const AuthLayout = ({ children }: Props) => {
  return (
    <div className='h-full flex flex-col items-center justify-center space-y-6'>
      <div className='flex items-center flex-col gap-y-4'>
        <Logo width={80} height={80} />
      </div>
      {children}
    </div>
  )
}

export default AuthLayout
