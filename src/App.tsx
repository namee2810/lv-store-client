import { ApolloProvider } from "@apollo/client"
import LoadingScreen from "components/LoadingScreen"
import "config/i18n"
import useAppSelector from "hooks/useAppSelector"
import React, { Suspense } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AppRouter from "router"
import apolloClient from "services/apollo"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "styles"
import "styles/styles.scss"
import darkTheme from "styles/theme/dark"
import lightTheme from "styles/theme/light"

toast.configure({ limit: 6 })

function App() {
  const { theme } = useAppSelector((state) => state.settings)

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          <Suspense fallback={<LoadingScreen />}>
            <AppRouter />
          </Suspense>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
