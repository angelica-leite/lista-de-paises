import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    };

    body {
        overflow-x: hidden;
    }


    button {
        cursor: pointer;
    };

    li{
        text-decoration: none;
    }

    a {
        text-decoration: none;
    };
`;
export default GlobalStyle;
