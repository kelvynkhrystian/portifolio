import styled from "styled-components";

export const SkillStyles = styled.article`

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
  width: 100%;

  div.skills {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
  }

  div.prev {
    align-items: center;
    /* border: 1px solid white; */
    border-radius: 10px;
    background-image: url('https://i.pinimg.com/originals/eb/07/bd/eb07bd44d9ec8ceacf78e724fe198a66.gif');
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 10px;
    width: 25%;
  }

  fieldset {
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* margin: 10px 0; */
    width: 95%;
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
    margin-bottom: 20px;
    height: 125px;
    padding: 10px;
    width: 100px;
  }

  section:hover {
    box-shadow: 0px 0px 5px 5px rgba(54,53,54,1);
  }

  legend {
    font-size: 2em;
    padding: 15px;
    /* filter: brightness(90%); */
  }

  img {
    border-radius: 10px;
    height: 70px;
    width: 70px;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    margin-top: 0;
    margin-bottom: 100px;

    fieldset {
      width: 100%;
    }

    div.skills {
      width: 90%;
    }

    div.prev {
      display: none;
    }

    section {
      height: 100px;
      width: 92px;
    }

    img {
      height: 50px;
      width: 50px;
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
  justify-content: flex-start;
  font-size: 1em;
  padding: 10px 50px;
  width: 100%;

  p {
    display: none;
    font-family: 'Roboto Condensed', sans-serif;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    flex-direction: column;
    padding: 10px 30px;

    p {
      display: flex;
      margin-top: 5px;
      margin-bottom: 10px;
    }
    
  }
`;