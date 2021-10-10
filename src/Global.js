import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap');
    *,
    *::before,
    *::after{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
    }
    
    p{
        opacity: 0.6;
        line-height: 1.5;
    }
    img{
        max-width: 100%;
    }
`;

export default GlobalStyles;
