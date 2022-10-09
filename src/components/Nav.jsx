import React from 'react'
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Nav = () => {
  return (
    <nav className="absolute z-10 flex h-20 w-full bg-white border-b-2 justify-center items-center">
      <div className=' float-left bg-gradient-to-tr bg-clip-text text-transparent from-teal-900 via-blue-800 to-violet-900 pl-10 font-Raleway-500 text-2xl sm:text-3xl font-bold whitespace-nowrap tracking-tighter'><h1 className='hidden sm:block'>BENJAMIN NAMIKAS</h1><h1 className='block sm:hidden'>BN</h1></div>
      {/* <div className='md:flex pr-4 hidden md:justify-end lg:justify-center items-center w-full h-full transition'>
      <Link to="" className='text-black text-xl px-2 mx-3'>Home</Link>
      <Link to="aboutme" className='text-black text-xl px-2 mx-3'>About Me</Link>
      <Link to="resume" className='text-black text-xl px-2 mx-3'>Resume</Link>
      <Link to="projects" className='text-black text-xl px-2 mx-3'>Projects</Link>
      </div> */}

      <Menu as="div" className="relative inline-block ml-auto pr-2 sm:pr-4 md:pr-10 lg:pr-16 text-center">
      <div className='pr-4 items-end justify-end flex'>
        <Menu.Button className="inline-flex justify-center rounded-md border border-transparent hover:border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:shadow-sm hover:bg-gray-50 "> {/*focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100*/}
          <i class="icofont-navigation-menu icofont-2x"></i>
          
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
        <Menu.Items className="absolute right-1 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to="" className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-md'
                )}>Home</Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="aboutme"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md'
                  )}
                >
                  About Me
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="Resume"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md'
                  )}
                >
                  Resume
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="Projects"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-md'
                  )}
                >
                  Projects
                </Link>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </nav>
  )
}

export default Nav