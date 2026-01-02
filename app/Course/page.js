import React from 'react'
import Link from 'next/link'

const page = () => {
     
  const ok = "dynamic_course_page"
  return (
    <div className='flex flex-col '>

      <h1 className='text-3xl text-center'>Btech</h1>
      <h2 className='text-xl text-center'>BCa</h2>
      <h2 className='text-xl text-center'>BBA</h2>
      <h2 className='text-xl text-center'>MBA</h2>
      <h2 className='text-xl text-center'>Mca</h2>
      <h2 className='text-xl text-center'>Mtech</h2>

      <Link className='text-center mt-20' href={`/Course/${ok}`}> dynamic </Link>
      
    </div>
  )
}

export default page