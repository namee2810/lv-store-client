import Box from "components/Box"
import styled from "styled-components"

export const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, auto));
  grid-gap: 16px;

  background-color: transparent;
`
