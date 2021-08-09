import LogoImg from "assets/images/logo.svg"
import React from "react"
import styled, { keyframes } from "styled-components"

const animation = keyframes`
  0%, 80%{
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`
const Img = styled.img`
  animation: ${animation} 5s ease-in-out infinite;
`

export default function Logo() {
  return <Img src={LogoImg} alt="" />
}
