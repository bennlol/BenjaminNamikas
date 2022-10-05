import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="absolute z-10 flex h-16 w-full bg-gray-300 justify-center items-center">
      <Link to="" className='text-black text-xl px-2 mx-3'>Home</Link>
      <Link to="about-me" className='text-black text-xl px-2 mx-3'>About Me</Link>
      <Link to="resume" className='text-black text-xl px-2 mx-3'>Resume</Link>
      <Link to="projects" className='text-black text-xl px-2 mx-3'>Projects</Link>
    </nav>
  )
}

export default Nav