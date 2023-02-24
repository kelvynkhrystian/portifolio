import React from 'react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../styles/projectStyles'

function CardProjects({ id, title, subtitle, image}) {

  const rotaId = `projects/${id}`

  return (
    <ProjectCard>
      <img src={image} alt={title} />
      <h1>{title.toUpperCase()}</h1>
      <h2>{subtitle}</h2>
      
      <Link to={rotaId}>
        <button>Ver Projeto</button>
      </Link>
    </ProjectCard>
  )
}

export default CardProjects