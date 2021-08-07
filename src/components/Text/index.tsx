import styled from "styled-components"

interface TextProps {
  size?: string
  weight?: "400" | "500" | "600" | "700"
  color?: string
  align?: "center" | "left" | "right"
}

const Text = styled.div<TextProps>`
  font-size: ${({ size }) => size + "px"};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => color && (theme.colors[color] || color)};
  text-align: ${({ align }) => align};
`

export default Text
