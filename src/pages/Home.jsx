import React from 'react'
import Header from '../components/Header'
import { HomeStyles } from '../styles/homeStyles'

function Home() {
  return (
    <>
      <Header />
      <HomeStyles>
        <h1>KELVYN</h1>
        <h1>KHRYSTIAN</h1>
        <p>Dev Full Stack</p>
        <div>
          <button className='left'>Currículo</button>
          <button className='rigth'>View Projects</button>
        </div>
      </HomeStyles>
    </>
  )
}

export default Home