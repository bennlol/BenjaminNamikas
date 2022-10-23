import React from 'react'
import pic from "../assets/me.jpg"
import { MContext, classNames } from '../components/VariableProvider';

const Home = () => {
  return (
    <MContext.Consumer>{ (context,) => (
      <section>
      <section>
        <div className={classNames('  flex flex-col w-full h-min-screen sm:h-screen px-2 sm:px-4 md:px-16 lg:px-32 xl:px-64 pt-28 justify-center items-center', context.state.darkMode? "bg-black text-offwhite" : " text-black bg-gray-50")}>
          <div className='flex flex-col sm:flex-row justify-center items-center h-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
            <h1 className=' w-auto  text-center  font-poppins'>Hi,<br/>I'm Benjamin Namikas,<br/>A life long coder and<br/>creative thinker</h1>
            <img className={classNames('h-32 rounded-md w-24 md:h-64 md:w-48 mx-2 md:mx-10  shadow-md',context.state.darkMode? 'shadow-gray-800': 'shadow-gray-500 ')} alt="Benjamin Namikas" src={pic}></img>
            <div className='flex flex-col w-auto  text-center '>
            <h1 className='font-Signika'>“The past is in your head<br/>The future is in your hands”</h1>
            <h1 className='pt-1 md:pt-4'>-Brian Ford</h1>
            </div>
          </div>
          <i className="icofont-3x icofont-stylish-down animate-bounce" />
        </div>
      </section>
      {/* <div className='w-full h-2 bg-gradient-to-b from-white to-black'></div> */}
      <div className='text-white font-poppins flex sm:h-screen w-full dark-gradient '>
        <div className={classNames('justify-center items-center flex flex-col p-8 md:p-32 h-full w-full bg-black', context.state.darkMode? ' bg-opacity-20':'bg-opacity-0')}>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-4 md:pb-10'>The Future Awaits</h1>
          <p className='text-lg sm:text-xl md:text-2xl px-2 sm:px-16 md:px-30 lg:px-48 xl:px-64 transition-all text-center'>&emsp; One man, but with the ability to change the world for the better. No matter how big everyone will shape the world. If everyone creates a positive place then eventually we will create a kind world with no war. All that is needed to is make your impact count. Leave a positive dent in all the negativity in the world. If we are all our own little candels, eventually we will become a bonfire. Share your heat with others and let them glow as well.</p>
          </div>
        </div>
      {/* <div className='w-full h-screen bg-white'></div> */}
    </section>
  )}
  </MContext.Consumer>
  )
}

export default Home