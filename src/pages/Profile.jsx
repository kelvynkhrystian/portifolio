import React from 'react'
import Header from '../components/Header'
import { ProfileStyles, ProfileHeader } from '../styles/profileStyles'
import profile1 from '../imgs/profile/1.png'
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
          <img src='https://pps.whatsapp.net/v/t61.24694-24/254456302_977615322960961_8740341469155859531_n.jpg?ccb=11-4&oh=01_AdS83kZfSia8II6URkgcD5Toem3IaGuyCeNQuynd5gAgUQ&oe=6403B2A7' alt="kelvyn de perfil" />
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
          <a href="https://www.linkedin.com/in/kelvynkhrystian/">
            
            <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/outlook.png?raw=true" alt="logo linkedin" />
            <p> khrsytian.dev@hotmail.com </p>
          </a>
        </div>
        

      </ProfileStyles>
    </>
  )
}

export default Profile