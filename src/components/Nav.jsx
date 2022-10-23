import { Link } from "react-router-dom";
import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MContext, classNames} from './VariableProvider';

const Nav = () => {
    
  return (
      <MContext.Consumer>{ (context,) => (
    <Fragment>
    <nav className={classNames("absolute z-10 flex h-[4.8rem] w-full justify-center items-center", context.state.darkMode? "bg-offblack" : "bg-offwhite")}>
      <Link to=""> <div className=' float-left bg-gradient-to-tr bg-clip-text text-transparent cursor-pointer from-teal-900 via-blue-800 to-violet-900 pl-10 font-Raleway-500 text-2xl sm:text-3xl font-bold whitespace-nowrap tracking-tighter'><h1 className='hidden sm:block'>BENJAMIN NAMIKAS</h1><h1 className='block sm:hidden'>BN</h1></div></Link>
      
        <i onClick={()=> (context.setDarkMode(context.state.darkMode?false:true)) } className={classNames("icofont-sun icofont-2x relative inline-block ml-auto mr-2 p-1 sm:mr-2 md:mr-3 lg:mr-4 text-center cursor-pointer rounded-md border border-transparent  hover:shadow-sm ", context.state.darkMode? ' text-white hover:bg-gray-900 hover:border-gray-700 ': 'text-black hover:border-gray-300 hover:bg-gray-50')}></i>

      <Menu as="div" className="relative inline-block pr-2 sm:pr-4 md:pr-6 lg:pr-8 text-center">
      <div className='pr-4 items-end justify-end flex'>
        <Menu.Button className={classNames("inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium  hover:shadow-sm ", context.state.darkMode? ' text-white hover:border-gray-700 hover:bg-gray-900 ':'text-black hover:border-gray-300 hover:bg-gray-50')}>
          <i className="icofont-navigation-menu icofont-2x"></i>
          
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
        <Menu.Items className={classNames("absolute right-1 z-10 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", context.state.darkMode? 'bg-gray-900 shadow-[rgb(20,20,30)]':'bg-gray-50')}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to="" className={classNames(
                  active ? context.state.darkMode? 'bg-gray-800 text-gray-200':'bg-gray-100 text-gray-900' : context.state.darkMode? 'text-gray-500' : 'text-gray-700',
                  'block px-4 py-2 text-md'
                  )}>Home</Link>
                  )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                to="aboutme"
                className={classNames(
                  active ? context.state.darkMode? 'bg-gray-800 text-gray-200':'bg-gray-100 text-gray-900' : context.state.darkMode? 'text-gray-500' : 'text-gray-700',
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
                  active ? context.state.darkMode? 'bg-gray-800 text-gray-200':'bg-gray-100 text-gray-900' : context.state.darkMode? 'text-gray-500' : 'text-gray-700',
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
                  active ? context.state.darkMode? 'bg-gray-800 text-gray-200':'bg-gray-100 text-gray-900' : context.state.darkMode? 'text-gray-500' : 'text-gray-700',
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
    <div className={classNames('absolute h-[5rem] bg-gradient-to-r  w-full', context.state.darkMode? 'from-blue-900 to-violet-900':' from-cyan-600 to-purple-600')}>
    </div>
    </Fragment>
    )}
    </MContext.Consumer>
  )
}

export default Nav