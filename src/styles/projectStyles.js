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
    width: 100%;

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

    /* padding-bottom: 100px; */
    background-color: red;
    
  }
`;

export const ProjectFilter = styled.section`

  align-items: center;
  /* background-color: #1f1f1f; */
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 50px;
  width: 100%;
  margin: 20px 5px;

  select {
    align-items: center;
    border-radius: 5px;
    background-color: #1f1f1f;
    color: white;
    cursor: pointer;
    filter: brightness(70%);
    height: 40px;
    padding-left: 10px;
    outline: none;
    width: 25%;
    margin-right: 10px;
  }

  .none {
    display: none;
  }

  .flex {
    display: flex;
  }

  @media (max-width:600px) {

    padding: 5px 5px;
    justify-content: space-around;

    select {
      margin-right: 0px;
      width: 42%;
    }
    
  }
`;

export const ProjectCard = styled.article`

  align-items: center;
  background-color: #363636;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 375px;
  justify-content: space-between;
  margin: 10px;
  width: 300px;

  img {
    border-radius: 15px;
    width: 300px;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2em;
    margin-top: 5px;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    padding: 0 20px;
  }

  button {
    background-color: transparent;
    border: 0 0 1px 2px solid #222222;
    border-radius: 0 0 15px 15px;
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

    width: 80%;

    img {
      width: 100%;
    }
    
  }
`;