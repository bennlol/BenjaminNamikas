import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="absolute z-10 flex h-16 w-full bg-gray-300 justify-center items-center">
      <h1 className='absolute left-4 z-20 font-poppins text-3xl font-bold whitespace-nowrap'>Benjamin Namikas</h1>
      <div className='flex justify-center items-center w-full h-full'>
      <Link to="" className='text-black text-xl px-2 mx-3'>Home</Link>
      <Link to="aboutme" className='text-black text-xl px-2 mx-3'>About Me</Link>
      <Link to="resume" className='text-black text-xl px-2 mx-3'>Resume</Link>
      <Link to="projects" className='text-black text-xl px-2 mx-3'>Projects</Link>
      </div>
    </nav>
  )
}

export default Nav