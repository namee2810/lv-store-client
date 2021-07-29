import { Input as AntInput } from "antd"
import styled from "styled-components"

const Input = styled(AntInput)`
  border-color: #dedede;

  &:hover {
    border-color: ${({ theme }) => theme.colors.success + "!important"};
  }
`

export default Input
