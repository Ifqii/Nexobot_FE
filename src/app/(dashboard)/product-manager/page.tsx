import { SearchBar } from '@/src/components/ui/SearchBar'
import React from 'react'

const page = () => {
  return (
    <div className="Add-agent mt-6 py-4 px-9 bg-white">
      <div className='flex justify-between items-center'>
      <SearchBar placeholder="Search Products..." className='w-80' variant='secondary'/>
      <div>
        vcvcg
      </div>
      </div>
    </div>
  )
}

export default page