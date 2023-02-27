import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import getSkills from '..//utils/getSkills';
import { SkillStyles, SkillHeader } from '../styles/skillStyles';
import DevFullStackBar from '../components/DevFullStackBar';
import SkillCard from '../components/SkillCard';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => setSkills(getSkills()), []);

  const frontEndSkills = skills.filter((skill) => skill.category === 'front');
  const backEndSkills = skills.filter((skill) => skill.category === 'back');
  const ferramentasSkills = skills.filter((skill) => skill.category === 'ferr');

  return (
    <>
      <Header />
      <DevFullStackBar />
      <SkillHeader>
        <h1>Habilidades</h1>
        <p>Clique nos ícones e receba informações</p>
      </SkillHeader>
      <SkillStyles>
        <div className="skills">
          <fieldset>
            <legend>FrontEnd</legend>
            {frontEndSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                image={skill.image}
                description={skill.description}
              />
            ))}
          </fieldset>

          <fieldset>
            <legend>BackEnd</legend>
            {backEndSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                image={skill.image}
                description={skill.description}
              />
            ))}
          </fieldset>

          <fieldset>
            <legend>Ferramentas</legend>
            {ferramentasSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                image={skill.image}
                description={skill.description}
              />
            ))}
          </fieldset>
        </div>
      </SkillStyles>
    </>
  );
}

export default Skills;
