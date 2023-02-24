import styled from "styled-components";

export const ProjectDisplay = styled.article`

  display: flex;
  font-size: 2em;
  justify-content: space-evenly;
  margin-top: 25px;

  h1 {
    padding: 10px;
    font-size: 1.5em;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    text-align: center;
    padding: 10px;
  }

  a {
    align-items: center;
    background-color: #111111;
    border-radius: 10px;
    color: white;
    padding: 10px 5px;
    text-decoration: none;
    text-align: center;
    margin-bottom: 10px;
    width: 45%;
  }

  a.rigth {
    background-color: white;
    color: #111111;
  }

  section.left {
    align-items: center;
    background-color: #464646;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-evenly;
    width: 40%;

    div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    img {
      border: 5px solid #111111;
      border-radius: 5px;
      /* margin: 25px; */
      width: 90%;
    }
    
    div.down {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
    }
  }

  section.rigth {

    align-items: center;
    background-color: #464646;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    width: 50%;

    h2 {
      font-size: 1.5em;
    }

    div.left {
      align-items: center;
      /* background-color: #122211; */
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 0.5em;
      height: 100%;
      width: 50%;

      section {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 90%;
      }

      img {
          width: 150px;
        }
    }

    div.rigth {
      /* font-size: 0.5em; */
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 45%;

      h2 {
        font-size: 1em;
        display: none;
      }

      img {
        border: 5px solid #111111;
        border-radius: 15px;
        width: 90%;
      }
    }
  }

  img {
    width: 100px;
  }

  @media (max-width:600px) {

    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    section.left {
      font-size: 0.7em;
      height: 400px;
      margin-bottom: 25px;
      width: 90%;
    }

    section.rigth {

      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 100px;
      width: 90%;

      img {
        width: 90%;
      }

      div.left {

        margin-bottom: 50px;
        width: 100%;

        section {
          align-items: flex-start;
          display: flex;
          /* justify-content: flex-start; */
          width: 90%;

          h2 {
            padding-left: 0;
            padding-top: 25px;
          }

          p {
            text-align: left;
          }
        }

        img {
          display: none;
        }
      }

      div.rigth {

        width: 90%;

        img {
          margin-bottom: 25px;
        }
      }
    }
  }
`;


