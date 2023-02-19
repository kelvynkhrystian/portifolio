import React from 'react'
import Header from '../components/Header'
// import CardProjects from '../components/CardProjects'
// import projects from '../database/projects.json'

function Projects() {
  return (
    <>
      <Header />
      <div>
        <h1>Projects</h1>
        <label htmlFor="search">
          <input type="text" placeholder='Busque um projeto ...' />
        </label>
      </div>
      <article>
        {/* {projects.map((elem) => {
          return (
            <CardProjects
              key={elem.id}
              title={elem.title}
              subtitle={elem.subtitle}
              image={elem.image}
            />
          );
        })} */}
      </article>
    </>
  )
}

export default Projects