import React, { useState, useEffect} from 'react'
import { ProjectBox, ProjectHeader, ProjectFilter} from '../styles/projectStyles'
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
        <div>
          <label htmlFor="search">
            <input type="text" placeholder='Busque um projeto ...' />
            <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/lupa.png?raw=true" alt="lupa" />
          </label>
          <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/filter.png?raw=true" alt="filtro" />
        </div>
      </ProjectHeader>
      <ProjectFilter>
        <select id="filter" name="filter">
          <option value="all">Todas as categorias</option>
          <option value="nojs">No JS</option>
          <option value="js">JS Vanilla</option>
          <option value="react">React JS</option>
        </select>
      </ProjectFilter>
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