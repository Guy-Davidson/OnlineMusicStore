import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;                       
    }

    body {    
        font-family: 'Poppins', 'Franklin Gothic Light', 'Arial Narrow', Arial;    
        font-weight: 300;
        box-sizing: border-box;            
        color: white;                                              
    }

    a, a:hover, a:visited, a:active, a:focus {
        text-decoration: none;
        color: inherit;
    }
`

export default GlobalStyles