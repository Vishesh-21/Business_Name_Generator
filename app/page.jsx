import { BottomBar } from '@/components/BottomBar'
import HeroSection from '@/components/HeroSection'
import { Search } from '@/components/Search'
import React from 'react'

export default function page(){
  return (
    <div>
      <HeroSection/>
      <Search/>
      <BottomBar/>
    </div>
  )
}

