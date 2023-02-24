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
  justify-content: space-evenly;
  width: 100%;

  @media (max-width:600px) {
    margin-bottom: 100px;
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
  margin: 10px 5px;

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
    margin-top: 5px;
  }

  .none {
    display: none;
  }

  .flex {
    display: flex;
  }

  @media (max-width:600px) {

    padding: 0 5px;
    justify-content: space-around;

    select {
      margin-right: 0px;
      margin-top: 10px;
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
    border: 5px solid #111111;
    margin-top: 15px;
    width: 90%;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.7em;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    padding: 0 20px;
  }

  a {
    /* border: 0 0 1px 2px solid red; */
    margin: 10px;
    width: 90%;
    
  }

  button {
    background-color: transparent;
    border-radius: 10px;
    border: 1px  2px solid black;
    color: white;
    cursor: pointer;
    font-size: 2em;
    height: 75px;
    width: 100%;
  }

  button:active {
    transform: scale(0.95);
  }

  button:hover {
    box-shadow: 0px 0px 5px 5px rgba(54,53,54,1);
  }
  

  @media (max-width:600px) {

    margin: 15px 0;
    padding: 0;
    width: 80%;

    img {
      width: 90%;
    }

    a {
      margin: 10px;
      width: 90%;
    }

    button {
      border-radius: 10px;
    }
    
  }
`;