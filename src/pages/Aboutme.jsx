import React from 'react'

const Aboutme = () => {
    return (
        <section className='flex flex-col pt-16 h-screen w-screen justify-center items-center transition-all'>
            <div className='h-full w-full py-20 px-4 sm:px-16 md:px-32 lg:px-72 items-left font-poppins'>
            <h1 className=' text-4xl pb-1 underline underline-offset-8  text-center w-full'>About Me</h1>
            {/* <hr classname=""></hr> */}
            <p className=' pt-4 text-xl lx-8 text-left'>&nbsp;&nbsp;&nbsp;&nbsp;
                Hello, I am Benjamin Namikas. I am a High School student at Baton Rouge Magnet High School. 
                Some of my hobbies include; computer science, reading, and debate. I am an active Boy Scout and have achieved
                life rank. Eagle is right around the corner. I have also joined a lot of clubs at BRMHS including the STEM club,
                debate club, science olympiad, computer science club, and BETA club. Along with clubs I am on a soccer team and
                occasionly play badminton. In school i push my self to be the best and often challange myself with challanging 
                classes.<br/>&nbsp;&nbsp;&nbsp;&nbsp;My Top coding languages include Python and C++, however I also know javascript,
                TI-Basic, bits of Java. Some of my interests in computer science include AI and Machine Vision. I also enjoy playing around 
                with linux, either in a VM or dual booting linux. Along with dual booting my PC, i have turn a spare laptop into a KASM 
                workspace server that will run customized docker containers on my network. I have also always wanted to code my own website
                and decided that this would be the perfect time to create my own website and learn about websites in the process.
          </p>
          </div>
        </section>
      )
}

export default Aboutme