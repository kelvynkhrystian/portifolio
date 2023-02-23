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
    border: 1px solid white;
    border-radius: 10px;
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
  }

  img {
    border-radius: 10px;
    height: 50px;
    width: 50px;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    div.prev {
      display: none;
    }

    section {
      width: 70px;
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
      margin-top: 10px;
    }
    
  }
`;