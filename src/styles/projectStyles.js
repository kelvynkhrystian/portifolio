import styled from "styled-components";

export const ProjectHeader = styled.article`

  align-items: center;
  

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
    
  }
`;

export const ProjectCard = styled.article`

  align-items: center;
  background-color: #363636;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  padding: 5px;
  margin: 15px;
  width: 300px;

  img {
    border-radius: 5px;
    width: 290px;
  }

  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2em;
    margin: 5px 0;
  }

  h2 {
    font-family: 'Patua One', cursive;
    font-size: 1em;
  }

  button {
    align-self: flex-end;
  }
  

  @media (max-width:600px) {

    align-items: center;
    
  }
`;