import React, { useState, useEffect} from 'react'
import Header from '../components/Header'
import getSkills from '..//utils/getSkills'
import {SkillStyles, SkillHeader} from '../styles/skillStyles'
import DevFullStackBar from '../components/DevFullStackBar'

function Skills() {

  const [skills, setSkills] = useState([]);

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
        <p>Clique nos ícones de tecnologias e receba informações sobre a mesma!</p>
      </SkillHeader>
      <fieldset>
        <legend>FrontEnd</legend>
        <p>testandoasdasdasd</p>
        <h2>test</h2>
        <p>testandoasdasdasd</p>
        <h2>test</h2>
      </fieldset>
      <fieldset>
        <legend>FrontEnd</legend>
        <p>testandoasdasdasd</p>
        <h2>test</h2>
        <p>testandoasdasdasd</p>
        <h2>test</h2>
      </fieldset>
      <SkillStyles>
        {skills.map((elem) => {
            return (
              <section>
                <img src={elem.image} alt={elem.title} />
                <h1>{elem.title.toUpperCase()}</h1>
                <h2>{elem.subtitle}</h2>
              </section>
            );
          })}
      </SkillStyles>
    </>
  )
}

export default Skills;