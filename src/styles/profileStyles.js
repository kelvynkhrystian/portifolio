import styled from "styled-components";

export const ProfileStyles = styled.article`

  align-items: flex-start;
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  section.perfil {
    align-items: flex-start;
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

    p {
      margin-top: 15px;
    }
  }

  section.contato {
    align-items: center;
    border-left: 1px solid white;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    margin-top: 25px;
    width: 30%;

    div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    img {
      border-radius: 5px;
      margin: 0 10px;
      width: 25px;
    }

    a {
      align-items: center;
      color: white;
      display: flex;
      margin: 10px;
      text-decoration: none;
    }
  }

  /* responsividade mobile */
  @media (max-width:600px) {

    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    .repeat {
      display: none;
    }

    section.perfil {
      padding: 25px;
      width: 100%;

      img {
        width: 45%;
      }
    }

    section.contato {

      border-left: none;
      border-top: 1px solid white;
      margin: 0;
      padding: 10px 25px;
      width: 100%;
      /* margin-bottom: 50px; */

      img {
        width: 20px;
      }
    }
    
    
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
