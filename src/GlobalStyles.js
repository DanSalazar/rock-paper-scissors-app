import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --gradient: radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    --b-radius: 8px;
    --red: hsl(349, 70%, 56%);
    --white: #ccc;
    --transition-mode: 0.4s ease;
    --green: #00b894;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
    background: var(--gradient);
    font-size: 16px;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyles
