import { createGlobalStyle } from "styled-components";

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
