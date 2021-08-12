import { Menu as AntMenu } from "antd"
import styled from "styled-components"

const Menu = styled(AntMenu)`
  background-color: ${({ theme }) => theme.boxItem};
`

export default Menu
