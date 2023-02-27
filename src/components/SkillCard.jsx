import React, { useState } from "react";

function SkillCard({ title, image, description }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <section >
      <h1>{title}</h1>
      <img src={image} alt={title} onClick={handleOpenModal} />

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}> 
          <div className="modal">
            {/* <h1>{title}</h1> */}
            <img src={image} alt={title}/>
            <p>{description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SkillCard;
