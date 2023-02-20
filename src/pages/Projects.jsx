import React, { useState, useEffect} from 'react'
import { ProjectBox, ProjectHeader } from '../styles/projectStyles'
import Header from '../components/Header'
import CardProjects from '../components/CardProjects'
import getProjects from '../utils/getProjects'

function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const projects = getProjects();
    setProjects(projects)
  }, []);

  return (
    <>
      <Header />
      <ProjectHeader>
        <h1>Projects</h1>
        <label htmlFor="search">
          <input type="text" placeholder='Busque um projeto ...' />
          <img src="lupa" alt="lupa" />
          <img src="lupa" alt="filtro" />
        </label>
      </ProjectHeader>
      <ProjectBox>
        {projects.map((elem) => {
          return (
            <CardProjects
              key={elem.id}
              title={elem.title}
              subtitle={elem.subtitle}
              image={elem.image}
              github={elem.github}
              deploy={elem.deploy}
            />
          );
        })}
      </ProjectBox>
    </>
  )
}

export default Projects