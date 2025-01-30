import { Sidebar } from '@/components/Sidebar'
import React from 'react'

const BusinessName = () => {
  return (
    <div className='px-20 text-white mb-8'>
        <h1 className='mt-20 text-center text-4xl font-semibold border-b pb-4'>Business Name</h1>
        
        <div className='flex justify-center items-start gap-10 mt-8'>
            <div className='w-[25%]'>
                <Sidebar/>
            </div>
            <div className='w-[75%] grid grid-cols-4 gap-5'>
              <div className='border border-primary p-3 rounded-md font-bold cursor-pointer hover:bg-primary duration-300'>Business Name</div>
            </div>
        </div>
    </div>
  )
}

export default BusinessName