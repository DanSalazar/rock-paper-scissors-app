import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
        background: radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        font-size: 16px;
        width: 100%;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`

export default GlobalStyles
