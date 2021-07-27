import { Box } from "@material-ui/core"
import tail_spin from "assets/images/tail-spin.svg"
import React from "react"

export default function LoadingScreen() {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img src={tail_spin} alt="" width="80px" />
    </Box>
  )
}
