import React from 'react';

function SkillCard({title, image}) {
  return (
    <section>
      <h1>{title}</h1>
      <img src={image} alt={title}/>
    </section>
  );
}

export default SkillCard;
