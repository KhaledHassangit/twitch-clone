import Following, { FollowingSkeleton } from '@/components/SideBar/Following'
import Recommended, { RecommendedSkeleton } from '@/components/SideBar/Recommended'
import ToggleButton, { TooggleButtonSkeleton } from '@/components/SideBar/ToggleButton'
import Wrapper from '@/components/SideBar/Wrapper'
import { getFollwedUsers } from '@/lib/FollowService'
import { getRecommended } from '@/lib/recommendedService'

const SideBar = async () => {
  const recommended = await getRecommended()
  const follows = await getFollwedUsers()
  return (
    <Wrapper>
      <ToggleButton />
      <Following data={follows} />
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
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  )
}