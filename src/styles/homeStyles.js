import styled from "styled-components";

export const HomeStyles = styled.article`

  align-items: flex-start;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 100px 50px;
  padding-bottom: 0;
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
  
  img {
    margin-right: 50px;
    width: 400px;
  }
  

  @media (max-width:600px) {
    padding: 50px 50px;

    img {
      display: none;
    }
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 2em;
    }
    button {
      margin: 0;
      margin-top: 10px;
      margin-right: 5px;
      height: 40px;
      width: 150px;
    }

    div.left-home > div {
      align-items: left;
      display: flex;
      justify-content: flex-start;
    }
  }
`;