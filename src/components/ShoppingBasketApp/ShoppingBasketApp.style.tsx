import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
     margin:0;
     padding:0;
     box-sizing: border-box;
     user-select: none;

   }
   body{
       font-size: 1rem;
       font-family: "Sahitya,serif" !important;
   }
`;

export const App = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
