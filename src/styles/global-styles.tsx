import { createGlobalStyle } from 'styled-components'
import { theme } from 'styles/theme'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: ${theme.colors.font};
    cursor: default;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button, input, textarea {
    all: unset;
  }

  button {
    cursor: pointer;
  }
  
  input {
    cursor: auto;
  }

  section:nth-last-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-last-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

`
