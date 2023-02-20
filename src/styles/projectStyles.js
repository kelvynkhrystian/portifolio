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
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-right: 10px;
    margin-left: 10px;
    
  }

  h1 {
    
  }

  div {
    align-items: center;
    display: flex;
    margin-top: 10px;
    justify-content: flex-start;
    width: 100%;
  }
  

  @media (max-width:600px) {

    padding: 10px 30px;

    div {
      justify-content: center;
    }

    label {
      justify-content: space-between;
    }
    
  }
`;

export const ProjectBox = styled.article`

  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  @media (max-width:600px) {

    align-items: center;
    
  }
`;

export const ProjectFilter = styled.section`

  align-items: center;
  background-color: #1f1f1f;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 50px;
  width: 100%;
  margin-bottom: 25px;

  select {
    align-items: center;
    border-radius: 5px;
    background-color: #1f1f1f;
    color: white;
    cursor: pointer;
    filter: brightness(70%);
    height: 40px;
    padding-left: 10px;
    width: 25%;
    outline: none;
  }

  @media (max-width:600px) {

    select {
      width: 100%;
    }
    
  }
`;

export const ProjectCard = styled.article`

  align-items: center;
  background-color: #363636;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  margin: 10px;
  width: 300px;

  img {
    border-radius: 15px;
    padding: 10px;
    width: 300px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2em;
  }

  h2 {
    font-family: 'Patua One', cursive;
    font-size: 1em;
  }

  button {
    background-color: #525252;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 2em;
    height: 75px;
    width: 100%;
  }

  button:active {
    transform: scale(0.95);
  }
  

  @media (max-width:600px) {

    width: 75%;

    img {
        width: 310px;
    }
    
  }
`;