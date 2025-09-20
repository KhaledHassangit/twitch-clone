import Recommended, { RecommendedSkeleton } from '@/components/SideBar/Recommended'
import ToggleButton, { TooggleButtonSkeleton } from '@/components/SideBar/ToggleButton'
// import Wrapper from '@/components/SideBar/Wrapper'
import { getRecommended } from '@/lib/recommendedService'
import dynamic from 'next/dynamic'

const Wrapper = dynamic(() => import( '@/components/SideBar/Wrapper'), { ssr: false })

const SideBar = async () => {
  const recommended = await getRecommended()
  return (
    <Wrapper>
      <ToggleButton />
      <Recommended data={recommended} />
    </Wrapper>
  )
}

export default SideBar


export const SideBarSkeleton = () => {
  return (
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35]
    z-50  '>
      <TooggleButtonSkeleton />
      <RecommendedSkeleton />
    </aside>
  )
}