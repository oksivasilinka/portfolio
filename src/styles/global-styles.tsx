import { createGlobalStyle } from 'styled-components'
import { theme } from 'styles/theme'
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    min-width: 360px;
  }

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: ${theme.colors.font};
    cursor: default;
    line-height: 1.2;
    &:focus-visible {
      outline: 1px solid ${theme.colors.font};
    }
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
    &:focus-visible {
      outline: 1px solid ${theme.colors.font};
    }
  }

  button, input {
    cursor: pointer;
  }
  
  input {
    cursor: auto;
  }
  section {
    padding-bottom: 100px;
    @media ${theme.media.mobile} {
      padding-bottom: 70px;
    }
  }

  section:nth-last-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-last-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

`
