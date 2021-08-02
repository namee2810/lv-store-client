import React, { ReactChild } from "react"
import styled from "styled-components"
import Header from "./components/Header"
import SideBar from "./components/SideBar"

interface GridAreaProps {
  area: string
}
interface HomeLayoutProps {
  children: ReactChild
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

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Container>
      <GridArea area="header">
        <Header />
      </GridArea>
      <GridArea area="sidebar">
        <SideBar />
      </GridArea>
      <GridArea area="main" style={{ overflowY: "auto", padding: "8px" }}>
        {children}
      </GridArea>
    </Container>
  )
}
