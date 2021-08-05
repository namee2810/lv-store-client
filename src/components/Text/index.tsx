import styled from "styled-components"

interface TextProps {
  size?: string
  weight?: "400" | "500" | "600" | "700"
  color?: string
}

const Text = styled.span<TextProps>`
  font-size: ${({ size }) => size + "px"};
  font-weight: ${({ weight }) => weight};
  color: ${({ color, theme }) => color && (theme.colors[color] || color)};
`

export default Text
