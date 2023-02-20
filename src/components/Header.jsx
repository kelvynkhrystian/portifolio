import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyles } from '../styles/headerStyles'
import homeIcon from '../imgs/icons/home.png'
import projectsIcon from '../imgs/icons/projects.png'
import skillsIcon from '../imgs/icons/skills.png'
import profileIcon from '../imgs/icons/profile.png'

function Header() {
  return (
    <HeaderStyles>

      <div className='left'>
        <h3>KELVYN K.</h3>
        <h4>Dev Full Stack</h4>
      </div>

      <section>
        <div>
          <Link to="/">
            <img src={homeIcon} alt="icon-test" />
            <p>Inicio</p>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <img src={projectsIcon} alt="icon-test" />
            <p>Projetos</p>
          </Link>
        </div>
        <div>
          <Link to="/skills">
            <img src={skillsIcon} alt="icon-test" />
            <p>Habilidades</p>
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <img src={profileIcon} alt="icon-test" />
            <p>Perfil</p>
          </Link>
        </div>
      </section>
    </HeaderStyles>
  )
}

export default Header