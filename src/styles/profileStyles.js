import styled from "styled-components";

export const ProfileStyles = styled.article`

  align-items: center;
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  section {
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;
    width: 100%;
  }

  section > img {
    border-radius: 15px;
    width: 40%;
  }

  p {
    text-align: left;
    width: 90%;
  }

  h3 {
    margin: 20px 0;
    text-align: left;
    width: 90%;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 90%;
  }

  div > a {
    align-items: center;
    color: white;
    display: flex;
    font-size: 1.2em;
    margin-bottom: 10px;
    text-decoration: none;
  }
  

  /* responsividade mobile */
  @media (max-width:600px) {

    div > a > img {
      margin-left: 5px;
      width: 25px;
    }
    
  }
`;

export const ProfileHeader = styled.article`

  align-items: flex-start;
  background-color: #272727;
  display: flex;
  justify-content: flex-start;
  font-size: 2em;
  padding: 10px 30px;
  width: 100%;
  

  /* responsividade mobile */
  @media (max-width:600px) {

    align-items: center;
    
  }
`;
