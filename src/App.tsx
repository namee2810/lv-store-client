import "antd/dist/antd.css"
import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import AppRouter from "router"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "styles"

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={LoadingScreen}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </Suspense>
    </>
  )
}

export default App
