import React from 'react'
import Link from 'next/link'
import SearchInput from '../components/NavBar/SearchInput'
import Logo from '../components/NavBar/Logo'
import Actions from '../components/NavBar/Actions'

const NavBar = () => {
    return (
        <nav className='fixed top-0 w-full h-20 z-[50] bg-[#252731] px-2 lg:px-4 flex items-center justify-between shadow-sm'>
            <Link href='/' >
                <div className=' flex mr-12 lg:mr-0 lg:shrink shrink-0 items-center  gap-x-4 hover:opacity-75 transition'>
                    <Logo width={32} height={32} />
                </div>
            </Link>
            <SearchInput/>
            <Actions/>
        </nav>
    )
}

export default NavBar
