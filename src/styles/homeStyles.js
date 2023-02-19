import styled from "styled-components";

export const HomeStyles = styled.article`

  align-items: flex-start;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px 50px;
  width: 100%;

  h1 {
    font-size: 5em;
  }

  p {
    font-size: 3em;
  }

  button {
    /* border-radius: 5px; */
    cursor: pointer;
    font-size: 1.5em;
    height: 50px;
    margin-right: 10px;
    margin-top: 20px;
    width: 200px;
  }
  
  button:active {
    transform: scale(0.95);
  }

  button.left {
    background-color: #8c8c8c;
    border: none;
  }

  button.rigth {
    color: #8c8c8c;
    border: 1px solid #8c8c8c;
    background-color: transparent;
    
  }

  button.left:hover {
    color: #8c8c8c;
    border: 1px solid #dadada;
    background-color: transparent;
  }

  button.rigth:hover {
    color: #dadada;
    border: 1px solid #dadada;
  }

  p, button {
    /* colocar fonte */
    
  }

  div.left-header {

  }
  
  img {
    margin-right: 50px;
    width: 350px;
  }
  

  @media (min-width:600px) {
    
  }
`;