import { Props } from '@/types/types'
import Container from '@/util/Container'
import NavBar from '@/util/NavBar'
import SideBar from '@/util/SideBar'

const BrowseLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className='h-full flex pt-20'>
        <SideBar />
        <Container>
          {children}
        </Container>
      </div>
    </>
  )
}

export default BrowseLayout
