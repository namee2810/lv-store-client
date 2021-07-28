import { Button as AntButton } from "antd"
import styled from "styled-components"
import { Color } from "styles"

interface ButtonProps {
  color: Color
  fullWidth?: boolean
}

const Button = styled(AntButton)<ButtonProps>`
  width: ${({ fullWidth }) => fullWidth && "100%"};
  background-color: ${({ color, theme }) => color && theme.colors[color]};
  color: ${({ color }) => color && "#fff"};
  border-color: ${({ color, theme }) =>
    color && theme.colors[color] + "!important"};

  &:hover {
    background-color: ${({ color, theme }) => color && theme.colors[color]};
    color: ${({ color }) => color && "#fff"};
  }
`

export default Button
