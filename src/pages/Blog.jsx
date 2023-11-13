import React from 'react'
import { MContext, classNames} from '../components/VariableProvider';
import BlogPosts from '../components/BlogPosts';

const Projects = () => {
  return (
    <MContext.Consumer>{ (context,) => (

    <section className={classNames('pt-20', context.state.darkMode? 'bg-black':'bg-white')}>
        <BlogPosts postsPerPage={20||10}/>
    </section>
    )}
    </MContext.Consumer>
  )
}

export default Projects