import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../styles/projectStyles'
// import PropTypes from 'prop-types';

function CardProjects({ title, subtitle, image}) {

  return (
    <ProjectCard>
      <img src={image} alt={title} />
      <h1>{title.toUpperCase()}</h1>
      <h2>{subtitle}</h2>
      
      <Link to="/projects/2">
        <button>Ver Projeto</button>
      </Link>
    </ProjectCard>
  )
}

// CardProjects.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   image: PropTypes.string,
// };

export default CardProjects