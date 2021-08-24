import { Button as AntButton } from "antd"
import styled from "styled-components"

interface ButtonProps {
  color?: string
  width?: string
  disabled?: boolean
}

const Button = styled(AntButton)<ButtonProps>`
  width: ${({ width }) => width};
  background-color: ${({ color, theme }) => color && theme[color]};
  color: ${({ color }) => color && "#fff"};
  border-color: ${({ color, theme }) => color && theme[color]};

  &:hover,
  &:focus {
    background-color: ${({ color, theme }) => color && theme[color + "_hover"]};
    color: ${({ color }) => color && "#fff"};
    border-color: ${({ color, theme }) => color && theme[color]};
  }
`

export default Button
