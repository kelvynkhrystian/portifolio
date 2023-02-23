import React from 'react'
import Header from '../components/Header'
import { ProfileStyles, ProfileHeader } from '../styles/profileStyles'
import profile1 from '../imgs/profile/1.png'
import profile2 from '../imgs/profile/2.jpg'
import DevFullStackBar from '../components/DevFullStackBar'

function Profile() {
  return (
    <>
      <Header />
      <DevFullStackBar />
      <ProfileHeader>
        <h1>Perfil</h1>
      </ProfileHeader>
      <ProfileStyles>
        <section>
          <img src={profile2} alt="kelvyn de frente" />
          <img src={profile1} alt="kelvyn de perfil" />
        </section>
        <p>
          Desde criança fascinado por tecnologia desenvolvendo minha curiosidade, conseguindo meu primeiro grande feito, baixar e gravar meu primeiro jogo no ps2, e aproveitar jogando com os amigos, ainda antes de entender pq ao inves de gravar dvd, tinha escrito o nome queimar dvd rs.
          Atualmente um estudante de desenvolvimento web da Trybe
        </p>
        <h3> • Contatos</h3>
        <div>
          <a href="https://www.linkedin.com/in/kelvynkhrystian/">
            
            <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/linkedin.png?raw=true" alt="logo linkedin" />
            <p> Linkedin </p>
          </a>
          <a href="https://github.com/kelvynkhrystian">
            
            <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/github.png?raw=true" alt="logo linkedin" />
            <p> Github </p>
          </a>
          <a href="https://clicano.link/khystiandev">
            
            <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/WhatsApp.png?raw=true" alt="logo linkedin" />
            <p> Whatsapp </p>
          </a>
          <a href="mailto:khrystian.dev@hotmail.com">
            
            <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/outlook.png?raw=true" alt="logo linkedin" />
            <p> khrsytian.dev@hotmail.com </p>
          </a>

          
        </div>
        

      </ProfileStyles>
    </>
  )
}

export default Profile