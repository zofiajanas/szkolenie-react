import { createGlobalStyle } from 'styled-components';

// import Avenir from '../fonts/AvenirLTStd-Roman.ttf';

/*  dodanie czcionki
@font-face {
    font-family: Avenir;
    src: url(${Avenir}) format('truetype');
    font-weight: normal;
    font-style: normal;
} */
const GlobalStyle = createGlobalStyle`


    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding:0;
        background-color: #F3F3F5;
    }

    html {
        font-family: Arial, Helvetica, sans-serif;
    }

`;

export default GlobalStyle;
