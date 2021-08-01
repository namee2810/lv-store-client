import LoadingScreen from "components/LoadingScreen"
import HomeLayout from "layouts/HomeLayout"
import React from "react"

export default function Home() {
  return (
    <HomeLayout>
      <LoadingScreen />
    </HomeLayout>
  )
}
