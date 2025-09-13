import React from 'react'
import Link from 'next/link'
import SearchBar from './SearchBar'
import Logo from './Logo'

const NavBar = () => {
    return (
        <nav className='fixed top-0 w-full h-20 z-[50] bg-[#252731] px-2 lg:px-4 flex items-center justify-between shadow-sm'>
            <Link href='/' >
                <div className='hidden lg:flex items-center  gap-x-4 hover:opacity-75 transition'>
                    <Logo width={32} height={32} />
                </div>
                <SearchBar/>
            </Link>
        </nav>
    )
}

export default NavBar
