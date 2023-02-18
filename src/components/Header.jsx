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
          <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
            <p>Home</p>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
            <p>Projects</p>
          </Link>
        </div>
        <div>
          <Link to="/skills">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
            <p>Skills</p>
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoeFDPBMcmQo60F8tvmWcut-WrdNfYwr9UzCU-Mw48X3h_peb2p-ed0-VMtmkm1YX5F8&usqp=CAU" alt="icon-test" />
            <p>Profile</p>
          </Link>
        </div>
      </section>
    </HeaderStyles>
  )
}

export default Header