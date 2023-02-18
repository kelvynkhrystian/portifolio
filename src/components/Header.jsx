import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyles } from '../styles/headerStyles'
import homeIcon from '../imgs/icons/home.png'

function Header() {
  return (
    <HeaderStyles>

      <div>
        <h3>KELVYN K</h3>
        <p>Dev Full Stack</p>
      </div>

      <section>
        <div>
          <Link to="/">
            <img src={homeIcon} alt="icon-test" />
            <p>Home</p>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <img src={homeIcon} alt="icon-test" />
            <p>Projects</p>
          </Link>
        </div>
        <div>
          <Link to="/skills">
          <img src={homeIcon} alt="icon-test" />
            <p>Skills</p>
          </Link>
        </div>
        <div>
          <Link to="/profile">
          <img src={homeIcon} alt="icon-test" />
            <p>Profile</p>
          </Link>
        </div>
      </section>
    </HeaderStyles>
  )
}

export default Header