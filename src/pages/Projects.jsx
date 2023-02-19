import React, { useState } from 'react'
import Header from '../components/Header'

function Projects() {

  const [projects, setProjects] = useState([])

  return (
    <>
      <Header />
      <div>
        <h1>Projects</h1>
        <label htmlFor="search">
          <input type="text" placeholder='Busque um projeto ...' />
        </label>
      </div>
      <article>

      </article>
    </>
  )
}

export default Projects