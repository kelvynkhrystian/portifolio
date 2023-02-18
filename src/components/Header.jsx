import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyles } from '../styles/headerStyles'

function Header() {
  return (
    <HeaderStyles>

      <div>
        <h3>KELVYN K</h3>
        <p>Dev Full Stack</p>
      </div>

      <section>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
          <Link to="/" > Home </Link>
        </div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
          <Link to="/projects" > Projects </Link>
        </div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
          <Link to="/skills" > Skills </Link>
        </div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
          <Link to="/profile" > Profile </Link>
        </div>
      </section>
    </HeaderStyles>
  )
}

export default Header