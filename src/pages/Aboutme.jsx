import React from 'react'
import me from "../assets/me_coding.jpg"
import reactlogo from "../assets/react.png"
import tailwindlogo from "../assets/tailwind.png"
const Aboutme = () => {
    return (
        <section className='flex flex-col pt-16 h-min-screen w-full justify-center items-center transition-all'>
            <div className='h-full w-full py-16 sm:px-16 md:px-32 lg:px-72 items-left font-poppins'>
            <h1 className='text-6xl font-poppins text-gray-900 font-bold'>About Me</h1>
            <div className='w-full  border-b-2 border-transparent bg-primary bg-opacity-80'></div>
            <div className='flex pt-12 px-4 text-xl my-auto lx-8 justify-center items-center text-left leading-relaxed'>
            <img alt='Benjamin Namikas Coding'src={me} className='shadow-md shadow-gray-600 w-min-80 h-60 bg-gray-200'/>
            <p className='px-4'>&nbsp;&nbsp;&nbsp;&nbsp;
                Hello, I am Benjamin Namikas. I am a High School student at Baton Rouge Magnet High School. 
                Some of my hobbies include; computer science, reading, and debate. I am an active Boy Scout and have achieved
                life rank so far. Along with clubs I am on a soccer team. In school i push my self to be the best and often challange myself with challanging 
                classes.</p>
            </div>
            <div className='flex pt-12 px-4 text-xl py-auto w-full justify-center items-center text-left leading-relaxed'>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;I am currently interested in web dev and in UX, UI design. I know react and tailwind along with pieces of other languages. I can also code Python and C++, some TI-Basic, bits of Java. I am also interested in AI and Machine Vision. I also enjoy playing around with linux, either in a VM or dual booting linux. Along with dual booting my PC, i have turn a spare laptop into a KASM workspace server that will run customized docker containers on my network. I have also always wanted to code my own website and decided that this would be the perfect time to create my own website and learn about websites in the process.
            </p>
            <div className=' flex flex-col w-[80rem] h-full'>
            <img src={reactlogo} alt="Tailwind + react, logos"></img>
            <img src={tailwindlogo} alt="Tailwind + react, logos"></img>
            </div>
            </div>
          </div>
        </section>
      )
}

export default Aboutme