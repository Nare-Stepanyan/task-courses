import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Montserrat', sans-serif;
   }
   #root{
       margin:0 auto;
   }
   body {
    overflow: hidden;
    @media (max-width: 1024px) {
       overflow: visible;
      }
  }
`;
