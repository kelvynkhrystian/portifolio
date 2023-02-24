import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getProjects from '../utils/getProjects'
import Header from '../components/Header';
import { ProjectDisplay } from '../styles/projectIdStyles'

function Projectid() {

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
      <ProjectDisplay>
        <section className='letf'>
          <div>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.subtitle} />
            <p>{project.subtitle}</p>
          </div>
            
          <div>
            <button>Repositório</button>
            <button>App Online</button>
          </div>
        </section>
        <section className='rigth'>
          <div>
            <section>
              <h2>Descrição</h2>

            </section>
            <section>

            </section>
            <section>
              <h2>Tecnologias Usadas</h2>

            </section>
          </div>
          <div>
            <h2>Preview Mobile</h2>
            <img src={project.image} alt={project.subtitle} />
          </div>
        </section>
      </ProjectDisplay>
    </>
    
  )
}

export default Projectid