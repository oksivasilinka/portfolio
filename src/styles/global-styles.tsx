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
        @media ${theme.media.tablet} {
            &:hover {
                all: unset;
            }
        }
    }

    html, body {
        min-width: 360px;

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
            -webkit-text-fill-color: ${theme.colors.font};
            -webkit-box-shadow: 0 0 0 1000px ${theme.colors.secondaryBg} inset;
            transition: background-color 5000s ease-in-out 0s;
            background: -webkit-linear-gradient(
                    rgba(255, 255, 255, 0) 0%,
                    rgba(0, 174, 255, 0.04) 50%,
                    rgba(255, 255, 255, 0) 51%,
                    rgba(0, 174, 255, 0.03) 100%
            );
        }
    }

    body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: ${theme.colors.font};
        line-height: 1.2;

        &:focus-visible {
            outline: 1px solid ${theme.colors.font};
        }
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};
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
