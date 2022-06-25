import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('http://fonts.googleapis.com/css?family=Lato:400,700')

    *{
        background: #fff;
    }

    html,body {
        height: 100vh;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        font-size: 62.5%;
    }

    h1,h2,p {
        opacity: 80%;
    }
`;
export default GlobalStyles;
