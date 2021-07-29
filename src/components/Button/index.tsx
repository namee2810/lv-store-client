import { Button as AntButton } from "antd"
import styled from "styled-components"

interface ButtonProps {
  color?: string
  width?: string
}

const Button = styled(AntButton)<ButtonProps>`
  width: ${({ width }) => width};
  background-color: ${({ color, theme }) => color && theme.colors[color]};
  color: ${({ color }) => color && "#fff"};
  border-color: ${({ color, theme }) =>
    color && theme.colors[color] + "!important"};

  &:hover,
  &:focus {
    background-color: ${({ color, theme }) =>
      color && theme.colors[color + "_hover"]};
    color: ${({ color }) => color && "#fff"};
  }
`

export default Button
