import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div>Header</div>
      <Link to="/" > Home </Link>
      <Link to="/projects" > Projects </Link>
      <Link to="/skills" > Skills </Link>
      <Link to="/profile" > Profile </Link>
    </>
  )
}

export default Header