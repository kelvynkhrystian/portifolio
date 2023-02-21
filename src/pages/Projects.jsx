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

  const handleCategories = (ev) => ev.target.value
  const handleDate = (ev) => ev.target.value

  useEffect(() => {

    const category = handleCategories()
    const date = handleDate()
    const projects = getProjects(busca,category,date);

    setProjects(projects)
  }, [busca]);

  return (
    <>
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
        <select className={`${showFilter}`} onChange={handleCategories}>
          <option value="all">Todas as categorias</option>
          <option value="react">React JS</option>
          <option value="js">JS Vanilla</option>
          <option value="nojs">Sem Javascript</option>
        </select>
        <select className={`${showFilter}`} onChange={handleDate}>
          <option value="recente">Mais Recente</option>
          <option value="antigo">Mais Antigo</option>
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
      <Header />
    </>
  )
}

export default Projects