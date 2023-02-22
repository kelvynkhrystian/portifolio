import React from 'react'
import { ProjectCard } from '../styles/projectStyles'
// import PropTypes from 'prop-types';

function CardProjects({ title, subtitle, image, click }) {


  // identificando o botão do projeto que foi clicado
  const clickProject = (ev) => console.log(ev.target.parentNode)


  return (
    <ProjectCard>
      <img src={image} alt={title} />
      <h1>{title.toUpperCase()}</h1>
      <h2>{subtitle}</h2>
      <button onClick={clickProject}>Ver Projeto</button>
    </ProjectCard>
  )
}

// CardProjects.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   image: PropTypes.string,
// };

export default CardProjects