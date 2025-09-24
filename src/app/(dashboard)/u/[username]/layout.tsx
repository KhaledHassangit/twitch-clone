import { redirect } from 'next/navigation'
import { getSelfByUserName } from '@/lib/authService'
import { CreatorLayoutProps } from '@/types/types'
import NavBar from '@/util/NavBar'
import CreatorSideBar from '@/components/CreatorDashboard/CreatorSideBar'
import Container from '@/util/Container'


const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {

    const self = await getSelfByUserName(params.username)
    if (!self) {
        redirect("/")
    }

    return (
        <>
        <NavBar showSearch={false} dashboard={true}  tagline='Creator Dashboard'/>
            <div className='flex h-full pt-20'>
                <CreatorSideBar/>
                <Container creator={true}>
                {children}
                </Container>
            </div>
        </>
    )
}

export default CreatorLayout