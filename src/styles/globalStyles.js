import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-x: hidden;
    height: 100vh;
    width: 100%;
  }

  body {
    align-items: center;
    color: white;
    background-color: #0f0f0f;
    display: flex;
    flex-direction: column;
    font-family: 'Patua One', cursive;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
  }


  @media (min-width:600px) {
    body {
      /* background-color: blue; */
    };
  }
`;

export default GlobalStyle;
