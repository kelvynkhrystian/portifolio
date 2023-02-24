/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react'
import { ProjectBox, ProjectHeader, ProjectFilter} from '../styles/projectStyles'
import Header from '../components/Header'
import CardProjects from '../components/CardProjects'
import getProjects from '../utils/getProjects'
import DevFullStackBar from '../components/DevFullStackBar'

function Projects() {

  const [projects, setProjects] = useState([]);
  const [showFilter, setShowFilter] = useState('none');
  const [busca, setBusca] = useState('');
  const [category, setCategory] = useState('all');
  const [date, setDate] = useState('current');
  
  const showFilterBox = display => {
    display === 'none' ? setShowFilter('flex') : setShowFilter('none');
  };

  const filter = (projects,category,date) => {

    // filtro select por categoria
    let filterCategory = projects.filter((search) => search.category.includes(category));
    if (category === 'all') filterCategory = projects;

    // filtro de busca escrita
    const lowerBusca = busca.toLowerCase()
    let filterBusca = filterCategory.filter((search) => search.title.toLowerCase().includes(lowerBusca));

    // filtro select recente ou antigo
    // const filter2 = date === 'recente' ? filter1.slice(0).reverse() : filter1.reverse();
    const filterDate = date === 'current' ? filterBusca.reverse() : filterBusca;

    // retorno filnal
    return filterDate;
  }

  // identificando qual filtro deve ser usado
  const handleCategories = (ev) => setCategory(ev.target.value)
  const handleDate = (ev) => setDate(ev.target.value)

  useEffect(() => {

    const projects = getProjects();
    const filtered = filter(projects,category,date);
    setProjects(filtered)

  }, [busca, category, date]);

  return (
    <>
      <Header />
      <DevFullStackBar />
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
        <select className={`${showFilter}`} onChange={handleCategories} value={category}>
          <option value="all">Todas as categorias</option>
          <option value="react">React JS</option>
          <option value="js">JS Vanilla</option>
          <option value="no">Sem Javascript</option>
        </select>
        <select className={`${showFilter}`} onChange={handleDate} value={date}>
          <option value="current">Mais Recente</option>
          <option value="old">Mais Antigo</option>
        </select>
      </ProjectFilter>
      <ProjectBox>
        {projects.map((elem) => {
          return (
            <CardProjects
              key={elem.id}
              id={elem.id}
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