import styled from "styled-components";

export const ProjectHeader = styled.article`

  align-items: flex-start;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2em;
  padding: 25px 50px;
  width: 100%;

  label {
    align-items: center;
    color: #383838;
    background-color: #1f1f1f;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    width: 320px;
  }

  input {
    background-color: transparent;
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 0.6em;
    padding: 7px 15px;
    outline: none;
  }

  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }

  h1 {
    
  }

  div {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    width: 100%;
  }
  

  @media (max-width:600px) {

    align-items: center;
    
  }
`;

export const ProjectBox = styled.article`

  align-items: center;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  @media (max-width:600px) {

    align-items: center;

    label {
      width: 300px;
      justify-content: space-between;
    }
    
  }
`;

export const ProjectCard = styled.article`

  align-items: center;
  background-color: #363636;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: space-between;
  padding: 20px;
  margin: 15px;
  width: 350px;

  img {
    border-radius: 5px;
    width: 300px;
  }

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 3em;
    margin: 5px 0;
    margin-bottom: 20px;
    /* line-height: 1.5; */
  }

  h2 {
    font-family: 'Patua One', cursive;
    font-size: 1em;
  }

  button {
    background-color: #525252;
    border-radius: 10px;
    color: #000000;
    cursor: pointer;
    font-size: 2em;
    height: 75px;
    width: 100%;
  }
  

  @media (max-width:600px) {

    width: 75%;

    img {
        width: 350px;
    }
    
  }
`;