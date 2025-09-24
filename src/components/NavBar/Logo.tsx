import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: "swap",
})

const Logo = ({ tagline }: { tagline: string }) => {
  return (
    <>
      <div className='bg-white rounded-full p-1'>
        <Image
          src="/spooky.svg"
          alt="Gamehub"
          width={40}
          height={40}
          draggable={false}
          unoptimized
        />
      </div>
      <div className={cn("hidden lg:flex flex-col items-center ", font.className)}>
        <p className="text-xl font-semibold">Gamehub</p>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </div>
    </>
  )
}

export default Logo
