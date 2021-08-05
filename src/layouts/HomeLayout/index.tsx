import Box from "components/Box"
import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import styled from "styled-components"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import HomeLayoutRouter from "./router"

interface BoxAreaProps {
  area: string
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
  overflow: hidden;
  background-color: #fafafa;
`
const BoxArea = styled(Box)<BoxAreaProps>`
  grid-area: ${({ area }) => area};
`

export default function HomeLayout() {
  return (
    <Container>
      <BoxArea area="header">
        <Header />
      </BoxArea>
      <BoxArea area="sidebar">
        <SideBar />
      </BoxArea>
      <BoxArea
        area="main"
        style={{ overflowY: "auto" }}
        backgroundColor="transparent"
        p={2}
      >
        <Suspense fallback={<LoadingScreen />}>
          <HomeLayoutRouter />
        </Suspense>
      </BoxArea>
    </Container>
  )
}
