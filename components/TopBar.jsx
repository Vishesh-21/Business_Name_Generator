import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const TopBar = () => {
  return (
    <div className='w-full fixed top-0 left-0 bg-bodyColor flex justify-between px-40 py-6'>
        <Link href='/'>
            <h1 className='text-4xl uppercase font-bold text-primary'>business</h1>
        </Link>
        <Link href={'https://github.com/Vishesh-21'} target='_blank' className='text-white flex gap-2 hover:underline hover:text-primary transition-all duration-200 items-center'>
            Check More Projects
            <MoveRight/>
        </Link>
    </div>
  )
}
