import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProjects from '../utils/getProjects'
import Header from '../components/Header';

function Projectid() {

  const { id } = useParams();

  const [projects, setProjects] = useState([]);
  const [project] = projects.filter((elem) => {
    return elem.id.toString() === id
  })

  useEffect(() => {

    const listProjects = getProjects();
    setProjects(listProjects)

  }, [projects]);

  console.log(project);

  return (
    <>
      <Header />
      <div>Id = {id}</div>
      <div>
        <section>

          <div>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.subtitle} />
            <p>{project.subtitle}</p>
          </div>
            
          <div>

            {/* <Link to={project.github}>
              <button>Repositório</button>
            </Link>
            <Link to={project.deploy}>
              <button>App Online</button>
            </Link> */}

          </div>
        </section>
        <section>
          <div>
            <section>
              <h2>Descrição</h2>
              {/* <p>{project.description}</p> */}
            </section>
            <section>
              {/* <img src={project.icon} alt={project.subtitle} /> */}
            </section>
            <section>
              <h2>Tecnologias Usadas</h2>
              {/* <p>{project.technologies}</p> */}
            </section>
          </div>
          <div>
            <h2>Preview Mobile</h2>
            <img src={project.image} alt={project.subtitle} />
          </div>
        </section>
      </div>
    
    </>
    
  )
}

export default Projectid