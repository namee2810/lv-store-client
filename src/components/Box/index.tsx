import styled from "styled-components"

interface BoxProps {
  position?: string
  height?: string
  width?: string

  display?: string
  justifyContent?: string
  alignItems?: string
  flexDirection?: string

  m?: number
  mx?: number
  my?: number
  mt?: number
  ml?: number
  mr?: number
  mb?: number

  p?: number
  px?: number
  py?: number
  pt?: number
  pl?: number
  pr?: number
  pb?: number

  backgroundColor?: string
  borderRadius?: number
  textAlign?: "left" | "center" | "right"
  elevation?: number
}

const boxShadows = [
  " 0 50px 80px rgba(0, 0, 0, 0.1)",
  `0 6.3px 10px rgba(0, 0, 0, 0.05),
    0 50px 80px rgba(0, 0, 0, 0.1)`,
  `0 3.3px 5.3px rgba(0, 0, 0, 0.04),
    0 11.2px 17.9px rgba(0, 0, 0, 0.06),
    0 50px 80px rgba(0, 0, 0, 0.1)`,
  `0 2.3px 3.6px rgba(0, 0, 0, 0.035),
    0 6.3px 10px rgba(0, 0, 0, 0.05),
    0 15.1px 24.1px rgba(0, 0, 0, 0.065),
    0 50px 80px rgba(0, 0, 0, 0.1)`,
  `0 1.7px 2.7px rgba(0, 0, 0, 0.031),
    0 4.3px 6.9px rgba(0, 0, 0, 0.044),
    0 8.9px 14.2px rgba(0, 0, 0, 0.056),
    0 18.3px 29.2px rgba(0, 0, 0, 0.069),
    0 50px 80px rgba(0, 0, 0, 0.1)`,
]

const Box = styled.div<BoxProps>`
  position: ${({ position }) => position};
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  margin-top: ${({ mt, my }) => (mt ? mt * 8 + "px" : my && my * 8 + "px")};
  margin-left: ${({ ml, mx }) => (ml ? ml * 8 + "px" : mx && mx * 8 + "px")};
  margin-right: ${({ mr, mx }) => (mr ? mr * 8 + "px" : mx && mx * 8 + "px")};
  margin-bottom: ${({ mb, my }) => (mb ? mb * 8 + "px" : my && my * 8 + "px")};
  margin: ${({ m }) => m && m * 8 + "px"};

  padding-top: ${({ pt, py }) => (pt ? pt * 8 + "px" : py && py * 8 + "px")};
  padding-left: ${({ pl, px }) => (pl ? pl * 8 + "px" : px && px * 8 + "px")};
  padding-right: ${({ pr, px }) => (pr ? pr * 8 + "px" : px && px * 8 + "px")};
  padding-bottom: ${({ pb, py }) => (pb ? pb * 8 + "px" : py && py * 8 + "px")};
  padding: ${({ p }) => p && p * 8 + "px"};

  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius + "px"};
  text-align: ${({ textAlign }) => textAlign};
  box-shadow: ${({ elevation }) => elevation && boxShadows[elevation - 1]};
`

export default Box
