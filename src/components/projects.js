import React from 'react'
import PropTypes from 'prop-types'


const Projects = (props) =>{
    
   return (

      <div className="projects">

          <h2>Projects</h2>

          {props.examples.map( example => {

            return(
               <div className="projComp"> 

                  <a href={example.link}>

                  {example.name}

                  </a>

                  <p> {example.description} < /p>

               </div>
             )
         })}

      </div>
   
   )
}

Projects.propTypes = {
   examples: PropTypes.array
}

export default Projects;