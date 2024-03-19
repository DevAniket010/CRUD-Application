import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black px-8 py-3'>
        <Link className="text-white font-bold text-2xl" href={"/"}>DevAJ</Link>
        <Link className="bg-white p-2 font-bold rounded-md" href={'/addTopic'}>Add Topic</Link>
    </nav>
  )
}

export default Navbar