import LoadingScreen from "components/LoadingScreen"
import React, { Suspense } from "react"
import styled from "styled-components"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import HomeLayoutRouter from "./router"

interface GridAreaProps {
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
const GridArea = styled.div<GridAreaProps>`
  grid-area: ${({ area }) => area};
`

export default function HomeLayout() {
  return (
    <Container>
      <GridArea area="header">
        <Header />
      </GridArea>
      <GridArea area="sidebar">
        <SideBar />
      </GridArea>
      <GridArea area="main" style={{ overflowY: "auto", padding: "8px" }}>
        <Suspense fallback={<LoadingScreen />}>
          <HomeLayoutRouter />
        </Suspense>
      </GridArea>
    </Container>
  )
}
