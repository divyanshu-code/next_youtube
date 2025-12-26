import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <>
      <div className='bg-blue-950 flex justify-between px-10 py-5'>
        <h2>MyHommies</h2>

        <div className='flex items-center gap-15'>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Course">Course</Link>
            <Link href="/Project">Project</Link>
            <Link href="/Blog">Blog</Link>
        </div>
      </div>
   </>
  )
}

export default Navbar