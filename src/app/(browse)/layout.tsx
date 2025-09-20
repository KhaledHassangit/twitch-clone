import { Props } from '@/types/types'
import Container from '@/util/Container'
import NavBar from '@/util/NavBar'
import SideBar, { SideBarSkeleton } from '@/util/SideBar'
import { Suspense } from 'react'

const BrowseLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className='h-full flex pt-20'>
        <Suspense fallback={<SideBarSkeleton />}>
        <SideBar />
        </Suspense>
        <Container>
          {children}
        </Container>
      </div>
    </>
  )
}

export default BrowseLayout
