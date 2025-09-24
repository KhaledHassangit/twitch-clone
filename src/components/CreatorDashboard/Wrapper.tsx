import { cn } from '@/lib/utils'
import { UseCreatorSideBar } from '@/store/UseCreatorSideBar'
import { Props } from '@/types/types'

const Wrapper = ({ children }: Props) => {

    const { collapsed } = UseCreatorSideBar((state)=> state)

    return (
        <aside className={cn(
            "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2d2e35] z-50",
            collapsed && "lg:w-[70px]")}>
            {children}
        </aside>
    )
}

export default Wrapper