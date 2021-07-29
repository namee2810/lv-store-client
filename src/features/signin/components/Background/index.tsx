import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  & > svg {
    position: absolute;
    bottom: 0;
  }
`

export default function Background() {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#26CB88"
          fillOpacity="0.6"
          d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,80C672,107,768,149,864,149.3C960,149,1056,107,1152,112C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#26CB88"
          fillOpacity="0.5"
          d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,170.7C672,149,768,139,864,160C960,181,1056,235,1152,240C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Container>
  )
}
