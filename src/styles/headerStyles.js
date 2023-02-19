
import styled from "styled-components";

export const HeaderStyles = styled.header`

  align-items: center;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    div {
      filter: brightness(70%);
      padding: 0px 20px;
    }
    
    div:hover {
      filter: brightness(100%);
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

  @media (min-width:600px) {
    
  }
`;