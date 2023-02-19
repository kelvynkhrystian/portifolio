import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { HomeStyles } from '../styles/homeStyles'
import cubo from '../imgs/background/cubo.gif'
import dino from '../imgs/icons/dino.gif'

function Home() {
  return (
    <>
      <Header />
      <HomeStyles>
        <div className='left-home'>
          <h1>
            KELVYN
            <img src={dino} alt="dino-chrome" />
          </h1>
          <h1>KHRYSTIAN</h1>
          <p>
            Dev Full Stack
          </p>
          <div>
            <button className='left'>Currículo</button>
            <Link to="/projects">
              <button className='rigth'>View Projects</button>
            </Link>
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