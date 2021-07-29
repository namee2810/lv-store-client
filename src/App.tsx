import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AppRouter from "router"
import "services/i18n"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "styles"
import "styles/styles.scss"

toast.configure({ limit: 6 })

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Suspense fallback={<LoadingScreen />}>
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </>
  )
}

export default App
