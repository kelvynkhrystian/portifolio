import styled from "styled-components";

export const ProfileStyles = styled.article`

  align-items: flex-start;
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 25px;
  width: 100%;

  section.perfil {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;

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
      width: 190px;
    }

    h1 {
      font-size: 2em;
    }

    p {
      margin-top: 15px;
    }
  }

  section.contato {
    align-items: center;
    background-color: #363636;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    width: 30%;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 90%;
    }

    img {
      border-radius: 5px;
      margin-right: 10px;
      width: 25px;
    }

    a {
      align-items: center;
      color: white;
      background-color: #1f1f1f;
      border-radius: 10px;
      display: flex;
      padding: 10px 15px;
      text-decoration: none;
    }

    a:hover {
      box-shadow: 0px 0px 2px 2px rgba(54,53,54,1);
    }

    h1 {
      text-align: center;
      font-size: 1.5em;
      padding: 10px 0;
      width: 90%;
    }

    h2 {
      background-color: #1f1f1f;
      border-radius: 10px;
      padding: 10px 0;
      text-align: center;
      width: 90%;
    }
  }

  /* responsividade mobile */
  @media (max-width:600px) {

    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;

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
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      border-left: none;
      border-top: 1px solid white;
      margin: 0;
      padding: 10px 0;
      width: 90%;
      margin-bottom: 75px;

      h1 {
        font-size: 1.5em;
        padding: 10px 0;
        width: 100%;
      }

      h2 {
        padding: 10px 0;
        text-align: center;
        width: 90%;
      }

      div {
        font-size: 0.7em;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 0;
        width: 100%;
      }

      img {
        width: 20px;
      }

      a {
        padding: 10px 10px;
        margin: 10px 0;
      }

      p {
        font-size: 1.5em;
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

    padding: 10px 30px;
    
  }
`;
