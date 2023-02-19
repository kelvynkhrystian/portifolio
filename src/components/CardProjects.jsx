import React from 'react'

function CardProjects() {

  const { title, subtitle, image } = this.props;

  return (
    <section>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={image} alt={title} />
    </section>
  )
}

export default CardProjects