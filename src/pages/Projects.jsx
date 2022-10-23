import React from 'react'
import { MContext, classNames} from '../components/VariableProvider';

const Projects = () => {
  return (
    <MContext.Consumer>{ (context,) => (

    <section className={classNames('h-screen w-screen flex pt-20 justify-center items-center', context.state.darkMode? 'bg-black':'bg-white')}>
      <h1 className='bg-clip-text bg-gradient-to-tr font-bold font-popins text-4xl  from-green-500 via-blue-500 to-red-500 text-transparent '>This Website Is Still Under Development</h1>
    </section>
    )}
    </MContext.Consumer>
  )
}

export default Projects