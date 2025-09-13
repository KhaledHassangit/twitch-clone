import NavBar from '@/components/Header/NavBar'
import { Props } from '@/types/types'
import React from 'react'

const BrowseLayout = ({ children }: Props) => {
  return (
    <>
    <div className='h-full flex pt-20'>
      <NavBar />
      {children}
    </div>
    </>
  )
}

export default BrowseLayout
