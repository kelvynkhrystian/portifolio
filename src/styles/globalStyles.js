import { createGlobalStyle } from 'styled-components';
import fundo from '../imgs/background/cubo.gif'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
  }

  body {
    align-items: center;
    color: white;
    background-image: url(${fundo});
    background-color: #0f0f0f;
    background-size: 30% 60%;
    background-repeat: no-repeat;
    background-position: right 15% bottom 45%;
    display: flex;
    flex-direction: column;
    font-family: 'Patua One', cursive;
    justify-content: flex-start;
    /* height: 100vh; */
    width: 100%;
  }


  @media (min-width:600px) {
    body {

    };
  }
`;

export default GlobalStyle;
