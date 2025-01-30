'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { toast } from '@/hooks/use-toast'
import { QueryDialoge } from './QueryDialoge'
import { useQueryContext } from '@/context/BusinessNameContext'

export const Search = () => {
  const {query,updateQuery} = useQueryContext();
  const [keyword,setKeyword] = useState("");
  const [open,setOpen] = useState(false);

  const handleKeyWord = (e) => {
    setKeyword(e.target.value);
  }

  const showQueryModel = () => {
    if(!keyword){
      return toast({title :'Failed to generate name...',description : 'Please enter keyword to generate name.'});
    }
    updateQuery({keyword});
    setOpen(!open);
    setKeyword("");
  }

  return (
    <div className='w-full flex justify-center items-center pt-5'>
        <div className='w-[560px] flex gap-3 items-center'>
            <Input placeholder='Enter keyword...' className='h-12 text-white md:text-lg text-primary border-primary' onChange={handleKeyWord} value={keyword}/>
            <Button onClick={showQueryModel} className='h-12 text-lg font-bold px-5'>Generate</Button>
        </div>
        <QueryDialoge open={open} setOpen={setOpen}/>
    </div>
  )
}
