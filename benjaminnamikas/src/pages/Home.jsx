import React from 'react'
import pic from "../assets/me.jpg"

const Home = () => {
  return (
    <section>
      <section>
        <div className=' bg-white flex flex-col w-full h-screen px-48 pt-28 justify-center items-center'>
          <div className='flex justify-center items-center h-full'>
            <h1 className='w-1/2 text-5xl text-center ml-16 font-poppins'>Hi,<br/>I'm Benjamin Namikas,<br/>A life long coder and<br/>creative thinker</h1>
            <img className='h-64 w-48 mx-10 shadow-black shadow-md' alt="Benjamin Namikas" src={pic}></img>
            <div className='flex flex-col w-1/2 text-5xl text-center mr-16 '>
            <h1 className='font-Signika'>“The past is in your head.<br/>The future is in your hands.”</h1>
            <h1 className='pt-4'>-Brian Ford</h1>
            </div>
          </div>
          <i class="icofont-3x icofont-stylish-down" />
        </div>
      </section>
      <div className='w-full h-2 bg-gradient-to-b from-white to-black'></div>
      <section className=' transition-all'>
        <div className='text-white font-poppins flex flex-col h-screen w-full bg-fixed dark-gradient p-8 md:p-32 items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-4 md:pb-10'>The Future Awaits</h1>
          <p className='text-lg sm:text-xl md:text-2xl px-2 sm:px-16 md:px-30 lg:px-48 xl:px-64 transition-all text-center'>&emsp; One man, but with the ability to change the world for the better. No matter how big everyone will shape the world. If everyone creates a positive place then eventually we will create a kind world with no war. All that is needed to is make your impact count. Leave a positive dent in all the negativity in the world. If we are all our own little candels, eventually we will become a bonfire. Share your heat with others and let them glow as well.</p>
        </div>
      </section>
      <div className='w-full h-screen bg-white'></div>
    </section>
  )
}

export default Home