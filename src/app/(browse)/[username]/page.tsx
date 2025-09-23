import Actions from "@/components/UserPage/Actions"
import { isFollwingUser } from "@/lib/FollowService"
import { getUserByUserName } from "@/lib/UserService"
import { UserPageProps } from "@/types/types"
import { notFound } from "next/navigation"



const UserPage = async ({ params }: UserPageProps) => {
    const { username } = params
    const user = await getUserByUserName(username)
    if(!user){
      notFound()
    }
    const isFollowing = await isFollwingUser(user.id)
  return (
    <div className="flex flex-col gap-y-4">
      <p>username: {user.username}</p>
      <p>user ID: {user.id}</p>
      <p>is following: {`${isFollowing}`}</p>
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  )
}


export default UserPage
