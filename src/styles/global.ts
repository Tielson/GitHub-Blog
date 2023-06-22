import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

:root{
  font-size: 62.5%;
}

input:focus{
  outline: 0;
  box-shadow: 0 0 0 .2rem ${(props) => props.theme.blue};
}

body{
  background: ${(props) => props.theme.base_background};
  color:  ${(props) => props.theme.base_title};
  font-size: 1.6rem;
}

body, input, textarea, button{
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

button, a {
      background: none;
      border: none;
      cursor: pointer;
}

body, input, button, textarea{
     outline: none;
}

a{
    text-decoration: none;
}
`
