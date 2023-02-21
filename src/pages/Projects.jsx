import React, { useState, useEffect} from 'react'
import { ProjectBox, ProjectHeader, ProjectFilter} from '../styles/projectStyles'
import Header from '../components/Header'
import CardProjects from '../components/CardProjects'
import getProjects from '../utils/getProjects'

function Projects() {

  const [projects, setProjects] = useState([]);
  const [showFilter, setShowFilter] = useState('none');
  const [busca, setBusca] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('recente');
  
  const showFilterBox = display => {
    display === 'none' ? setShowFilter('flex') : setShowFilter('none');
  };

  const filter = (projects) => {

    // filtro select por categoria
    const filter1 = projects.filter((search) => search.category.includes(category));
    // filtro select recente ou antigo
    const filter2 = date === 'antigo'? filter1: filter1.reverse();
    // filtro de busca escrita
    const lowerBusca = busca.toLowerCase()
    const filter3 = filter2.filter((search) => search.title.toLowerCase().includes(lowerBusca));
    // retorno filnal
    return filter3;
  }

  const handleCategories = (ev) => {
    const categoryName = (ev.target.value)
    console.log(categoryName);
    setCategory(date)
    return categoryName;
  };

  const handleDate = (ev) => {
    const dateName = (ev.target.value)
    // console.log(dateName);
    setDate(dateName)
    return dateName;
  };

  useEffect(() => {

    const projects = getProjects();
    const filtrado = filter(projects);
    // const projects = getProjects(busca);
    setProjects(filtrado)
    // console.log(date);
  }, [busca, category, date]);

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
        <select className={`${showFilter}`} onChange={handleCategories} value={category}>
          <option value="all">Todas as categorias</option>
          <option value="react">React JS</option>
          <option value="js">JS Vanilla</option>
          <option value="nojs">Sem Javascript</option>
        </select>
        <select className={`${showFilter}`} onChange={handleDate} value={date}>
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