import styled from "styled-components";

export const ProfileStyles = styled.article`

  align-items: flex-start;
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  section.perfil {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    padding-top: 25px;
    width: 70%;

    div {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 10px;
      width: 100%;
    }

    img {
      border-radius: 25px;
      width: 200px;
    }
  }

  section.contato {
    align-items: center;
    border-left: 10px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;
    width: 30%;

    img {
      width: 50px;
    }
  }

  /* responsividade mobile */
  @media (max-width:600px) {

    
    
  }
`;

export const ProfileHeader = styled.article`

  align-items: flex-start;
  background-color: #272727;
  display: flex;
  justify-content: flex-start;
  font-size: 1em;
  padding: 10px 50px;
  width: 100%;
  

  /* responsividade mobile */
  @media (max-width:600px) {

    align-items: center;
    
  }
`;
