import React from 'react'
import PropTypes from 'prop-types';

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

CardProjects.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

export default CardProjects