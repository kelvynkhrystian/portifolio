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
            Dev-FullStack
          </p>
          <div>
            {/* <button className='left'>Currículo</button> */}
            <Link to="/projects">
              <button className='right'>Ver Projetos ⇾</button>
            </Link>
          </div>
        </div>
        <div className='right-home'>
          <img src={cubo} alt="cubo-transmorfo" />
        </div>
      </HomeStyles>
    </>
  )
}

export default Home