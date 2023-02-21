import React, { useState, useEffect} from 'react'
import { ProjectBox, ProjectHeader, ProjectFilter} from '../styles/projectStyles'
import Header from '../components/Header'
import CardProjects from '../components/CardProjects'
import getProjects from '../utils/getProjects'

function Projects() {

  const [projects, setProjects] = useState([]);
  const [showFilter, setShowFilter] = useState('none');
  const [busca, setBusca] = useState('');
  
  const showFilterBox = display => {
    display === 'none' ? setShowFilter('flex') : setShowFilter('none');
  };

  useEffect(() => {
    const projects = getProjects(busca);
    setProjects(projects)
  }, [busca]);

  return (
    <>
      <Header />
      <ProjectHeader>
        <h1>Projetos</h1>
        <div>
          <label htmlFor="search">

            <input 
              type="text"
              value={busca}
              placeholder='Busque um projeto ...'
              onChange={(ev) => {setBusca(ev.target.value)}}
            />
            <img
              src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/lupa.png?raw=true"
              alt="lupa"
            />
          
          </label>
          <img
            onClick={() => showFilterBox(showFilter)}
            src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/filter.png?raw=true"
            alt="filtro"
          />
        </div>
      </ProjectHeader>
      <ProjectFilter >
        <select className={`${showFilter}`}>
          <option value="all">Todas as categorias</option>
          <option value="nojs">No JS</option>
          <option value="js">JS Vanilla</option>
          <option value="react">React JS</option>
        </select>
        <select className={`${showFilter}`}>
          <option value="all">Mais Recente</option>
          <option value="nojs">Mais Antigo</option>
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