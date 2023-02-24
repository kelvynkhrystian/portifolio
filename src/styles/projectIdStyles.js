import styled from "styled-components";

export const ProjectDisplay = styled.article`

  /* align-items: center; */
  display: flex;
  justify-content: space-evenly;

  section.left {
    align-items: center;
    background-color: #464646;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 40%;

    img {
      border: 2px solid #111111;
      border-radius: 5px;
      width: 500px;
    }
  }

  section.rigth {
    background-color: #464646;
    width: 50%;
  }


  img {
    width: 100px;
  }

  @media (max-width:600px) {

    
    
  }
`;


