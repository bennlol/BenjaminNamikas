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
      {/* <div className='absolute bottom-0 justify-center items-center'> */}
        <i class="icofont-3x icofont-stylish-down"></i>
      {/* </div> */}
    </div>
    </section>
    <div className='w-full h-2 bg-gradient-to-b from-white to-black'></div>
    <section>
    <div className='h-screen w-full dark-gradient'>
      
    </div>
    </section>
    </section>
  )
}

export default Home