import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import bg from '../assets/parallax-fg.png'
import mg from '../assets/parallax-mg.png'
import fg from '../assets/parallax-bg.png'
const ParallaxGalaxy = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: fg, speed: -40 },
        { image: mg, speed: -25 },
        { image: bg, speed: -10 }
      ]}
      className="w-full h-full aspect-[2/1]">
      <div className='absolute inset-0 text-white  font-poppins flex flex-col sm:h-screen w-full justify-center p-8 md:p-32 items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-4 md:pb-10 bg-[#00000050] text-center pt-2 px-2'>The Future Awaits</h1>
          <p className='text-lg sm:text-xl md:text-2xl px-2 sm:px-16 md:px-30 lg:px-48 xl:px-64 transition-all text-center bg-[#00000050]'>&emsp; One man, but with the ability to change the world for the better. No matter how big everyone will shape the world. If everyone creates a positive place then eventually we will create a kind world with no war. All that is needed to is make your impact count. Leave a positive dent in all the negativity in the world. If we are all our own little candels, eventually we will become a bonfire. Share your heat with others and let them glow as well.</p>
      </div>
      <div className="h-[400px] bg-black" >
        <p>Hi</p>
      </div>
    </ParallaxBanner>
  );

}

export default ParallaxGalaxy