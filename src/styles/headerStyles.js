
import styled from "styled-components";

export const HeaderStyles = styled.header`

  align-items: center;
  background: black;
  color: white;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  width: 100%;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;
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

  @media (min-width:600px) {
    
  }
`;