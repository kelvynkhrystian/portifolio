import styled from "styled-components";

export const HomeStyles = styled.article`

  align-items: flex-start;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

  h1 > img {
    margin: 0;
    margin-left: 25px;
    width: 50px;
  }

  @media (max-width:600px) {
    align-items: center;
    flex-direction: column;
    height: 92%;
    justify-content: space-evenly;
    padding: 0;

    img {
      opacity: 0.2;
      width: 90%;
      margin-right: 0;
    }
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 2em;
    }
    button {
      font-size: 1.2em;
      height: 40px;
      margin: 0;
      margin-top: 20px;
      margin-right: 5px;
      width: 150px;
    }

    div.left-home > div {
      align-items: left;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    h1 > img {
      margin: 0;
      margin-left: 25px;
      opacity: 1;
      width: 40px;
    }

    .rigth-home {
      align-items: center;
      left: 0;
      position: absolute;
      top: 20%;
      z-index: 1;
    }

    .left-home {
      z-index: 2;
    }
  }
`;