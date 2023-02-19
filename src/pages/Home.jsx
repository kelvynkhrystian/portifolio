import React from 'react'
import Header from '../components/Header'
import { HomeStyles } from '../styles/homeStyles'
import cubo from '../imgs/background/cubo.gif'

function Home() {
  return (
    <>
      <Header />
      <HomeStyles>
        <div className='left-home'>
          <h1>KELVYN</h1>
          <h1>KHRYSTIAN</h1>
          <p>Dev Full Stack</p>
          <div>
            <button className='left'>Currículo</button>
            <button className='rigth'>View Projects</button>
          </div>
        </div>
        <div className='rigth-home'>
          <img src={cubo} alt="cubo-transmorfo" />
        </div>
        
      </HomeStyles>
    </>
  )
}

export default Home