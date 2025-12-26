import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-42'>here is my project page <br />

      <Link href="/Project/fuelfit"> fuelfit </Link>
      <Link href="/Project/food_paradise"> food paradise </Link>
    </div>

     
  )
}

export default page