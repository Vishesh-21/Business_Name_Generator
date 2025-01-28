import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export const Search = () => {
  return (
    <div className='w-full flex justify-center items-center pt-5'>
        <div className='w-[560px] flex gap-3 items-center'>
            <Input placeholder='Enter keyword...' className='h-12 text-white md:text-lg text-primary border-primary'/>
            <Button className='h-12 text-lg font-bold px-5'>Generate</Button>
        </div>
    </div>
  )
}
