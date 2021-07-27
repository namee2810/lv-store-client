import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import AppRouter from "router"

function App() {
  return (
    <Suspense fallback={LoadingScreen}>
      <AppRouter />
    </Suspense>
  )
}

export default App
