import styled from "styled-components";

export const SkillStyles = styled.article`

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 25px;
  width: 100%;

  div.skills {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }

  div.prev {
    align-items: center;
    /* border: 1px solid white; */
    border-radius: 10px;
    /* background-image: url('https://i.gifer.com/79tT.gif'); */
    /* background-image: url('https://gifs.eco.br/wp-content/uploads/2021/09/gifs-aesthetic-wallpaper-para-desktop-e-mobile-5.gif'); */
    background-image: url('https://phoneky.co.uk/thumbs/screensavers/down/anime/themelanch_Yd5mfRw8.gif');
    background-size: cover;
    color: #0f0f0f;
    display: flex;
    display: none;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 10px;
    width: 25%;
  }

  fieldset {
    border-radius: 10px;
    display: flex;
    border: none;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* margin: 10px 0; */
    width: 30%;
  }

  section {
    align-items: center;
    background-color: #0f0f0f;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 2px rgba(54,53,54,1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    /* margin-left: 20px; */
    margin: 5px;
    margin-bottom: 20px;
    height: 100px;
    padding: 5px;
    width: 85px;
  }

  /* section:hover {
    box-shadow: 0px 0px 5px 5px rgba(54,53,54,1);
  }

  section:active {
    transform: scale(0.95);
  } */

  legend {
    font-size: 2em;
    padding: 15px;
    /* filter: brightness(90%); */
  }

  img {
    border-radius: 10px;
    height: 50px;
    width: 50px;
  }

  .modal {
    align-items: center;
    border-radius: 10px;
    color: #0f0f0f;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 60%;
    background-color: white;
    z-index: 9999;
    /* padding: 20px; */
    border: 2px solid transparent;
    border-image: linear-gradient(
      to right,
      #464646,
      #232323,
      #464646,
      #232323,
      #464646
    );
    box-shadow: 0px 0px 10px #fff, 0px 0px 20px #fff, 0px 0px 40px #616161,
      0px 0px 60px #616161, 0px 0px 80px #616161;
    padding: 25px;

    img {
      height: 200px;
      width: 200px;
    }

    p {
      color: #0f0f0f;
      text-align: left;
    }
  }


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}    

  /* responsividade mobile */
  @media (max-width:600px) {

    margin-top: 0;
    margin-bottom: 100px;

    fieldset {
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    div.skills {
      flex-direction: column;
      width: 90%;
    }

    div.prev {
      display: none;
    }

    section {
      margin: 15px 10px;
      padding: 10px 0;
      height: 115px;
      width: 90px;
      margin-top: 0;
    }

    img {
      height: 60px;
      width: 60px;
    }

    .modal {
      width: 70%;

      img {
        height: 150px;
        width: 150px;
      }
    }


  }
`;

export const SkillCard = styled.section`

  align-items: center;
  img {
    width: 50px;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    bottom:0;
    
  }
`;

export const SkillHeader = styled.article`

  align-items: flex-start;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1em;
  padding: 10px 50px;
  width: 100%;

  p {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: 'Roboto Condensed', sans-serif;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    flex-direction: column;
    padding: 10px 30px;

    p {
      
    }
    
  }
`;