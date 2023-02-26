import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import cubo from '../imgs/background/cubo.gif';
import dino from '../imgs/icons/dino.gif';

import { HomeStyles } from '../styles/homeStyles';

function Home() {
  return (
    <>
      <Header />
      <HomeStyles>
        <div className='left-home'>
          <h1>
            KELVYN
            <img src={dino} alt="dino do chrome" />
          </h1>
          <h1>KHRYSTIAN</h1>
          <p>
            Dev-FullStack
          </p>
          <div>
            <a href="https://drive.google.com/file/d/1G7KMqEZCVLAl83quSzZNFvFHANVT5pkg/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
              <button className='left'>Baixar CV</button>
            </a>
            <Link to="/projects">
              <button className='rigth'>Ver Projetos ⇾</button>
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