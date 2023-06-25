import React from 'react'
import { MContext, classNames} from '../components/VariableProvider';

const Projects = () => {
  return (
    <MContext.Consumer>{ (context,) => (

    <section className={classNames('pt-20', context.state.darkMode? 'bg-black':'bg-white')}>
    </section>
    )}
    </MContext.Consumer>
  )
}

export default Projects