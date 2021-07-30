import { ApolloProvider } from "@apollo/client"
import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AppRouter from "router"
import apolloClient from "services/apollo"
import "services/i18n"
import { store } from "store"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "styles"
import "styles/styles.scss"

toast.configure({ limit: 6 })

function App() {
  return (
    <>
      <GlobalStyle />
      <ReduxProvider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<LoadingScreen />}>
              <AppRouter />
            </Suspense>
          </ThemeProvider>
        </ApolloProvider>
      </ReduxProvider>
    </>
  )
}

export default App
