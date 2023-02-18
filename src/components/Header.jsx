import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyles } from '../styles/headerStyles'

function Header() {
  return (
    <HeaderStyles>
      <div>
        <h3>KELVYN K.</h3>
        <p>Dev Full Stack</p>
      </div>
      <div>
        <Link to="/" > Home </Link>
        <Link to="/projects" > Projects </Link>
        <Link to="/skills" > Skills </Link>
        <Link to="/profile" > Profile </Link>
      </div>
    </HeaderStyles>
  )
}

export default Header