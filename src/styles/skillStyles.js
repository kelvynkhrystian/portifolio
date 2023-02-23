import styled from "styled-components";

export const SkillStyles = styled.article`

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  fieldset {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px 0;
    width: 90%;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: red;
    /* margin: 10px; */
  }

  legend {
    margin: 15px;
  }

  img {
    width: 50px;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

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