import React, { useState, useEffect} from 'react'
import Header from '../components/Header'
import getSkills from '..//utils/getSkills'
import {SkillStyles, SkillHeader} from '../styles/skillStyles'
import DevFullStackBar from '../components/DevFullStackBar'

function Skills() {

  const [skills, setSkills] = useState([]);
  const front = skills.filter((elem) => elem.category === 'front')
  const back = skills.filter((elem) => elem.category === 'back')
  const ferr = skills.filter((elem) => elem.category === 'ferr')
  // const test = skills.filter((elem) => elem.category === 'test')
  // const soft = skills.filter((elem) => elem.category === 'soft')

  // const ShowPreview = (ev) => {
  //   const id = ev.target
  //   console.log(id);
  // }
  // key={elem.id} onClick={ShowPreview}

  useEffect(() => {

    const listSkills = getSkills();
    setSkills(listSkills)

  }, [skills]);

  return (
    <>
      <Header />
      <DevFullStackBar />
      <SkillHeader>
        <h1>Habilidades</h1>
        <p>Clique nos ícones e receba informações</p>
      </SkillHeader>
      <SkillStyles>
        <div className='skills'>

          <fieldset>
            <legend>FrontEnd</legend>
            {front.map((elem) => {
              return (
                <section>
                  <h1>{elem.title}</h1>
                  <img src={elem.image} alt={elem.title}/>
                </section>
              );
            })}    
          </fieldset>

          <fieldset>
            <legend>BackEnd</legend>
            {back.map((elem) => {
                return (
                  <section>
                    <h1>{elem.title}</h1>
                    <img src={elem.image} alt={elem.title} />
                  </section>
                );
              })}  
          </fieldset>

          {/* <fieldset>
            <legend>Testes</legend>
            {test.map((elem) => {
                return (
                  <section>
                    <h1>{elem.title}</h1>
                    <img src={elem.image} alt={elem.title} />
                  </section>
                );
              })}  
          </fieldset> */}

          <fieldset>
            <legend>Ferramentas</legend>
            {ferr.map((elem) => {
                return (
                  <section>
                    <h1>{elem.title}</h1>
                    <img src={elem.image} alt={elem.title} />
                  </section>
                );
              })}  
          </fieldset>

          {/* <fieldset>
          <legend>Soft Skills</legend>
            {soft.map((elem) => {
                return (
                  <section>
                    <h1>{elem.title}</h1>
                    <img src={elem.image} alt={elem.title} />
                  </section>
                );
              })}  
          </fieldset> */}

        </div>
        <div className='prev'>
          <h1>pre-visualização</h1>
        </div>
      </SkillStyles>
    </>
  )
}

export default Skills;