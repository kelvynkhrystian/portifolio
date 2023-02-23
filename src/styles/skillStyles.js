import styled from "styled-components";

export const SkillStyles = styled.article`

  align-items: center;
  img {
    width: 50px;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    bottom:0;
    
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
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1em;
  padding: 10px 30px;
  width: 100%;

  p {
    display: none;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    flex-direction: column;

    p {
      display: flex;
      margin-top: 10px;
    }
    
  }
`;