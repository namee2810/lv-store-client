import { Badge } from "antd"
import Box from "components/Box"
import useAppSelector from "hooks/useAppSelector"
import React from "react"
import { AiOutlineBell } from "react-icons/ai"
import { FiSun } from "react-icons/fi"
import styled from "styled-components"

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 8px;

  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04), 0 3.4px 13.4px rgba(0, 0, 0, 0.06),
    0 15px 60px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 22px;
  }
  img {
    border-radius: 8px;
  }
`

export default function Header() {
  const user = useAppSelector((state) => state.user.user)

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={1}
    >
      <div></div>
      <Box display="flex">
        <Item>
          <Badge count={1} size="small">
            <AiOutlineBell />
          </Badge>
        </Item>
        <Item>
          <img src={user.image} alt="" />
        </Item>
        <Item>
          <FiSun />
        </Item>
      </Box>
    </Box>
  )
}
