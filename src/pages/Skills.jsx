import React, { useState, useEffect} from 'react'
import Header from '../components/Header'
import getSkills from '..//utils/getSkills'

function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const listSkills = getSkills();
    setSkills(listSkills)

  }, [skills]);

  return (
    <>
      <Header />
      <div>
        {skills.map((elem) => {
            return (
              <section>
                <img src={elem.image} alt={elem.title} />
                <h1>{elem.title.toUpperCase()}</h1>
                <h2>{elem.subtitle}</h2>
              </section>
            );
          })}
      </div>
    </>
  )
}

export default Skills;