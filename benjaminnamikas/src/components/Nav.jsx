import React from 'react'

const Nav = () => {
  return (
    <nav className=" flex h-16 w-full bg-gray-300 justify-center items-center">
      <button className='text-black text-xl px-2 mx-3'>Home</button>
      <button className='text-black text-xl px-2 mx-3'>About Me</button>
      <button className='text-black text-xl px-2 mx-3'>Resume</button>
      <button className='text-black text-xl px-2 mx-3'>Projects</button>
    </nav>
  )
}

export default Nav