import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #bfbfbf;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #cfcfcf;
      &:hover {
        background: #bfbfbf;
      }
    }
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  a, a:hover {
    color: inherit;
  }
`

const device = {
  mobileS: `(max-width: 375px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 768px`,
  tablet: `(max-width: 1024px)`,
  laptop: `(max-width: 1440px)`,
  desktop: `(min-width: 1440px)`,
}
export { GlobalStyle, device }
