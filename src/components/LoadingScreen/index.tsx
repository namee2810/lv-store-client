import tail_spin from "assets/images/tail-spin.svg"
import Box from "components/Box"
import React from "react"

export default function LoadingScreen() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img src={tail_spin} alt="" width="80px" />
    </Box>
  )
}
