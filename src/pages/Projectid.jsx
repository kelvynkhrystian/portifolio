import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getProjects from '../utils/getProjects'
import Header from '../components/Header';
import DevFullStackBar from '../components/DevFullStackBar';
import { ProjectDisplay } from '../styles/projectIdStyles'

function ProjectId() {

  const { id } = useParams();
  const [project, setProject] = useState([])

  useEffect(() => {

    const [filterData] = getProjects().filter((elem) => {
      return elem.id === id
    });

    setProject(filterData)

  }, [id, project]);

  

  return (
    <>
      <Header />
      <DevFullStackBar />
      <ProjectDisplay>
        <section className='left'>
          <div className='up'>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.subtitle} />
            <h2>{project.subtitle}</h2>
          </div>
            
          <div className='down'>
            <a href={project.github} target='blank' className='left' >Repositório</a>
            <a href={project.deploy} target='blank' className='right' >App Online</a>
          </div>
        </section>
        <section className='right'>
          <div className='left'>
            <section>
              <h2>Descrição</h2>
              <p>{project.description}</p>
            </section>
            <section>
              <img src={project.icon} alt="ícone do projeto" />
              <h1>{project.title}</h1>
            </section>
            <section>
              <h2>Tecnologias Usadas</h2>
              <p>{project.technologies}</p>
            </section>
          </div>
          <div className='right'>
            <h2>Preview Mobile</h2>
            <img src={project.image2} alt={project.subtitle} />
            <div className='down'>
              <a href={project.github} target='blank' className='left' >Repositório</a>
              <a href={project.deploy} target='blank' className='right' >App Online</a>
            </div>
          </div>
        </section>
      </ProjectDisplay>
    </>
    
  )
}

export default ProjectId