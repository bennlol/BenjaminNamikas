import React from 'react'
import { MContext, classNames} from '../components/VariableProvider';


const Resume = () => {
  return (
	<MContext.Consumer>{ (context,) => (

    <section className={classNames('pt-32 pb-16  md:px-[10%] lg-[15%] xl:px-[25%] text-lg	', context.state.darkMode?'bg-black text-white':'bg-[rgba(225,225,225,0.9)] text-black')}>
		<h1 className={classNames('text-6xl font-poppins pb-1 font-bold',  context.state.darkMode?'text-gray-100':'text-gray-900' )}>Resume</h1>
		<div className='w-full h-[2px] bg-black mb-5 bg-gradient-to-r from-blue-600 to-cyan-500 bg-opacity-80'></div>
        <p>
            <span className='text-3xl font-bold'>Education</span>
			<br/>
            <span className = "pl-2">High School, </span>
            <span>Baton Rouge Magnet High School (BMMHS) </span>
            <span className = ""> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;May 2025</span>
        </p>
        <p className='text-3xl font-bold pt-5'>
            <span>Academic Achievements</span>
        </p>
        <p className = "pl-2">
            <span>Texas Speech and Debate Camp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>July 2022</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>1</span>
                <span>st</span>
                <span>&nbsp;Place, Novice Tournament</span>
            </li>
			<li>
					Hello
			</li>
        </ul>
        <p className = "pl-2">
            <span>LSEF State Science Fair &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>April 2022</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>&ldquo;Development of an Automated System to Solve the Dehydration Problem &rdquo;</span>
            </li>
            <li>
                <span>2</span>
                <span>nd</span>
                <span>&nbsp;Place in Robotics and Intelligent machines</span>
            </li>
        </ul>
        <p className = "pl-2">
            <span>Science Olympiad National Participation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>April 2021</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>Placed in top 25 in Mission Possible, and Density Lab </span>
            </li>
        </ul>
        <p className = "pl-2">
            <span>LSEF State Science Fair &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>April 2021</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>&ldquo;Pest Recognition on Crops Using a Variety of Machine Learning Techniques &rdquo;</span>
            </li>
            <li>
                <span>2</span>
                <span>nd</span>
                <span>&nbsp;Place Overall, 1</span>
                <span>st</span>
                <span>&nbsp;Place in Robotics and Intelligent Machines</span>
            </li>
        </ul>
        <p className = "pl-2">
            <span>National History Day State Competition &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>April 2020</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>The Queen vs. Louis Riel, the Trial That Changed the Future for the Metis Nation</span>
            </li>
            <li>
                <span>1</span>
                <span>st</span>
                <span>&nbsp;Place, advanced to National competition</span>
            </li>
        </ul>
        <p className = "pl-2">
            <span>You Be The Chemist, State Competition &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>April 2020</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>1</span>
                <span>st</span>
                <span>&nbsp;Place in Team test </span>
            </li>
        </ul>
        <p className = "pl-2">
            <span>LSEF State Science Fair &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>April 2020</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>&ldquo;Fair A Comparison of Plant Growth Using Four Soil-Free Growth Systems &rdquo;</span>
            </li>
            <li>
                <span>1</span>
                <span>st</span>
                <span>&nbsp;Place Overall, 1</span>
                <span>st</span>
                <span>&nbsp;Place in Plant Science</span>
                <span>&nbsp;</span>
            </li>
        </ul>
        <p className = "pl-2">
            <span></span>
        </p>
        <p className = "pl-2">
            <span>LSEF State Science Fair &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>April 2019</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>&ldquo;A Comparison of </span>
                <span>plant growth using three hydroponics systems &rdquo;</span>
            </li>
            <li>
                <span>1</span>
                <span>st</span>
                <span>&nbsp;Place in Plant Science</span>
            </li>
        </ul>
        <p className="text-3xl font-bold pt-5">
            <span>Activities </span>
        </p>
        <p className="text-xl font-semibold pt-5">
            <span>Leadership: </span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>Taught Forensics, Science Olympiad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020</span>
            </li>
            <li>
                <span>Life Rank, Boy Scouts of America &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022</span>
            </li>
            <li>
                <span>DEI Ambassador, America My Oyster Association (AMOA)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021</span>
            </li>
        </ul>
        <p className="text-xl font-semibold pt-5">
            <span>Extracurricular activities</span>
            <span>:</span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>Geaux Hack LSU Competition, Team Slayter, 1</span>
                <span>st</span>
                <span>&nbsp;Place, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022</span>
            </li>
            <li>
                <span>Mu Alpha Theta, BRMHS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-2023</span>
            </li>
            <li>
                <span>Math Circle, LSU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019-2021</span>
            </li>
            <li>
                <span>Stem Club, BRMHS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021-2023</span>
            </li>
            <li>
                <span>Beta Club / Competitions, BRMHS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2023</span>
            </li>
            <li>
                <span>Soccer (BRSC and BRMHS Freshman team) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2015-2023</span>
            </li>
            <li>
                <span>Piano (including Rally and Festival) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016-2023</span>
            </li>
        </ul>
        <p className="text-xl font-semibold pt-5">
            <span>Volunteer Experience/ Community Service </span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>Recognized by Gov. John Bell Edwards, for AMOA</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022</span>
            </li>
        </ul>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>Recognized by Mayor Sharon Westin-Broome, for AMOA</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022</span>
            </li>
            <li>
                <span>Beta Volunteer, BRMHS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-2023</span>
            </li>
            <li>
                <span>Volunteer, Catholic Charities &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2018-2022</span>
            </li>
        </ul>
        <p className="text-xl font-semibold pt-5">
            <span>Computer Skills and Activities </span>
        </p>
        <p className = "pl-2">
            <span></span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>Python proficient, Moderate at C++ and Java Script </span>
            </li>
            <li>
                <span>Geaux Hack, LSU Competition, Team </span>
                <span>Slayyyter</span>
                <span>, 1</span>
                <span>st</span>
                <span>&nbsp;Place &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022</span>
            </li>
            <li>
                <span>Repl it Game Jams </span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019-2022</span>
            </li>
            <li>
                <span>Designed and self-coded </span>
                <span>
                    <a href="https://www.google.com/url?q=http://www.benjaminnamikas.com&amp;sa=D&amp;source=editors&amp;ust=1687664221382060&amp;usg=AOvVaw26m3C0jBIZQgOEvguYvD15">www.benjaminnamikas.com</a>
                </span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022</span>
            </li>
        </ul>

        <p className="text-xl font-semibold pt-5">
            <span>Employment </span>
        </p>
        <ul className='list-disc ml-8 pl-4'>
            <li>
                <span>Soccer Referee, BR Soccer Club</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2022-2023</span>
            </li>
        </ul>
    </section>
	)}
	</MContext.Consumer>
  )
}

export default Resume