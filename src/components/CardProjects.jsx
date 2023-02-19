import React from 'react'
// import PropTypes from 'prop-types';

function CardProjects({ title, subtitle, image }) {

  return (
    <section>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>View Project</button>
    </section>
  )
}

// CardProjects.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   image: PropTypes.string,
// };

export default CardProjects