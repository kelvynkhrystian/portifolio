import React from 'react'
import Header from '../components/Header'
import CardProjects from '../components/CardProjects'
import projects from '../database/projects.json'

function Projects() {
  return (
    <>
      <Header />
      <div>Projects</div>
      <article>
        {projects.map((elem) => {
          return (
            <CardProjects
              key={elem.id}
              title={elem.title}
              subtitle={elem.subtitle}
              image={elem.image}
            />
          );
        })}
      </article>
    </>
  )
}

export default Projects