
import styled from "styled-components";

export const HeaderStyles = styled.header`

  align-items: center;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  div.left {
    margin-left: 50px;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 50px;

    div {
      filter: brightness(70%);
      margin-left: 50px;
    }
    
    div:hover {
      filter: brightness(100%);
    }

    div:active {
    transform: scale(0.95);
  }
  }

  img {
    width: 20px;
  }

  a {
    align-items: center;
    color: white;
    text-decoration: none;
    text-align: center;
  }

  p {
    font-family: 'Roboto Condensed', sans-serif;
  }

  h3 {
    font-size: 1.3em;
  }

  @media (max-width:600px) {

    bottom:0;
    left: 0;
    position: fixed;
    width: 100%;

    div.left {
      display: none;
    }

    section {
      justify-content: space-around;
      margin: 0;
      width: 100%;

      div {
        margin: 0;
      }
    }
  }
`;