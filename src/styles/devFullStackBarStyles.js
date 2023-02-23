import styled from "styled-components";

export const DevFullStackBarStyles = styled.article`

  align-items: center;
  color: white;
  display: none;
  background-color: black;
  font-family: 'Major Mono Display', monospace;
  padding: 15px;
  

  /* responsividade mobile */
  @media (max-width:600px) {

    display: flex;
    justify-content: flex-end;
    
  }
`;