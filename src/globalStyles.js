import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }
    body::-webkit-scrollbar {
        width: 6px;               /* width of the entire scrollbar */
    }
      
    body::-webkit-scrollbar-track {
        background: #191923;        /* color of the tracking area */
    }
      
    body::-webkit-scrollbar-thumb {
        background-color: #0E79B2;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`;

export default GlobalStyle;