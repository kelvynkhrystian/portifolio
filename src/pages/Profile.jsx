import React from 'react'
import Header from '../components/Header'
import { ProfileStyles, ProfileHeader } from '../styles/profileStyles'
import profile1 from '../imgs/profile/1.png'
import profile2 from '../imgs/profile/2.jpg'
import profile3 from '../imgs/profile/3.png'
import profile4 from '../imgs/profile/4.png'
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
        <section className='perfil'>
          <div>
            <img src={profile2} alt="kelvyn de frente" />
            <img src={profile1} alt="kelvyn de perfil" />
            <img src={profile3} alt="kelvyn de frente" className='repeat'/>
            <img src={profile4} alt="kelvyn de perfil" className='repeat'/>
          </div>
          
          <p>
            Desde criança fascinado por tecnologia desenvolvendo minha curiosidade,
            conseguindo meu primeiro grande feito, baixar e gravar meu primeiro 
            jogo no ps2, e aproveitar jogando com os amigos, ainda antes de entender
            pq ao inves de gravar dvd, tinha escrito o nome queimar dvd rs.
          </p>
          <p>
            Sou um estudante de web Full Stack da Trybe, onde até agora ja aprendi GIT, 
            HTML, CSS, JS, Jest, Metodologias ágeis, Kanban, Scrum, Trello, Requisições 
            em api externas, fiz alguns projetos em grupo para consolidar conhecimentos e 
            experiêncas em um ambiente de trabalho coletivo. Focando em Frontend aprendi, 
            REACT, RTL, Redux, Context API, além das Soft Skills. Atualmente focando em Backend, 
            estudando Typescript.
          </p>
        </section>
        <section className='contato'>
          <h1>Entre em contato via rede social</h1>
          <div>
            <a href="https://www.linkedin.com/in/kelvynkhrystian/" target='blank'>
              
              <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/linkedin.png?raw=true" alt="logo linkedin" />
              <p> Linkedin </p>
            </a>
            <a href="https://github.com/kelvynkhrystian" target='blank'>
              
              <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/github.png?raw=true" alt="logo linkedin" />
              <p> Github </p>
            </a>
            <a href="https://clicano.link/khystiandev" target='blank'>
              
              <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/WhatsApp.png?raw=true" alt="logo linkedin" />
              <p> Whatsapp </p>
            </a>
            {/* <a href="mailto:khrystian.dev@hotmail.com">
              
              <img src="https://github.com/kelvynkhrystian/portifolio/blob/main/src/imgs/icons/rede-social/outlook.png?raw=true" alt="logo linkedin" />
              <p> khrystian.dev@hotmail.com </p>
            </a> */}
          </div>
          <h1> ou envie um email para:</h1>
          <h2> • khrystian.dev@hotmail.com •</h2>
          
        </section>
        

      </ProfileStyles>
    </>
  )
}

export default Profile