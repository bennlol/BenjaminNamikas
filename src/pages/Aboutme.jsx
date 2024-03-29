import React from 'react'
import me from "../assets/me_coding.jpg"
import reactlogo from "../assets/react.png"
import tailwindlogo from "../assets/tailwind.png"
import { MContext, classNames} from '../components/VariableProvider';

const Aboutme = () => {
    return (
        <MContext.Consumer>{ (context,) => (
        <section className={classNames('flex flex-col pt-16 h-min-screen w-full justify-center items-center transition-all', context.state.darkMode?'bg-black text-[rgba(255,255,255,0.75)]':'bg-white text-black')}>
            <div className='h-full w-full py-16 sm:px-16 md:px-32 lg:px-54 xl:px-72 items-left font-poppins'>
            <h1 className={classNames('text-6xl font-poppins pl-4 font-bold', context.state.darkMode? 'text-offwhite':'text-gray-900')}>About Me</h1>
            <div className='w-full  border-b-2 border-transparent bg-primary bg-opacity-80'></div>
            <div className='flex flex-col lg:flex-row pt-12 px-4 text-xl my-auto lx-8 justify-center items-center text-left leading-relaxed'>
            <img alt='Benjamin Namikas Coding'src={me} className={classNames('shadow-md  w-min-80 h-60 ',context.state.darkMode? 'shadow-gray-800':'shadow-gray-600')}/>
            <p className='px-4'>&nbsp;&nbsp;&nbsp;&nbsp;
                Hello, I am Benjamin Namikas. I am a high school student at Baton Rouge Magnet High School. Some of my hobbies include computer science, reading, and debate. I am an active Boy Scout and have achieved the life rank so far. Along with clubs, I am on a soccer team. In school, I push myself to be the best and often challenge myself with challenging classes.</p>
            </div>
            <div className='flex flex-col lg:flex-row pt-12 px-4 text-xl py-auto w-full justify-center items-center text-left leading-relaxed'>
                <p className='w-full'>&nbsp;&nbsp;&nbsp;&nbsp; I am currently interested in web development and in UX/UI design. I know React and Tailwind, along with pieces of other languages. I can also code Python and C++, some TI-Basic, and bits of Java. I am also interested in AI and Machine Vision. I also enjoy playing around with Linux, either in a VM or dual-booting Linux. Along with dual-booting my PC, I have turned a spare laptop into a KASM workspace server that will run customized Docker containers on my network. I have also always wanted to code my own website and decided that this would be the perfect time to create my own website and learn about websites in the process.
            </p>
            <div className=' flex flex-row lg:flex-col w-[160px] h-full '>
            <img src={reactlogo} className='' alt="Tailwind + react, logos"></img>
            <img src={tailwindlogo} alt="Tailwind + react, logos"></img>
            </div>
            </div>
          </div>
        </section>
        )}
        </MContext.Consumer>
      )
}

export default Aboutme