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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  #root {
    height: 100vh;
  }

`
const colors = {
  primary: "#6380ff",
  primary_hover: "#5070fa",
  success: "#26CB88",
  success_hover: "#1fb578",
  error: "#FB6884",
  error_hover: "#ff4568",
  warn: "#ff9914",
  warn_hover: "#e38812",
  white: "#fff",
  black: "#000",
  lightgray: "#ededed",
  gray: "#888",
  lightblue: "#def2ff",
  purple: "#a985ff",
}

const device = {
  mobileS: `(max-width: 375px)`,
  mobileM: `(max-width: 425px)`,
  mobileL: `(max-width: 768px`,
  tablet: `(max-width: 1024px)`,
  laptop: `(max-width: 1440px)`,
  desktop: `(min-width: 1440px)`,
}
const theme = {
  colors,
}
export { GlobalStyle, theme, device }
