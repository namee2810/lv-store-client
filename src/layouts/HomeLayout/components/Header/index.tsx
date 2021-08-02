import { Badge } from "antd"
import Box from "components/Box"
import BoxItem from "components/BoxItem"
import useAppSelector from "hooks/useAppSelector"
import React from "react"
import { AiOutlineBell } from "react-icons/ai"
import { FiSun } from "react-icons/fi"

export default function Header() {
  const user = useAppSelector((state) => state.user.user)

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row-reverse"
      p={1}
      style={{ borderBottom: "1px solid #eee" }}
    >
      <Box display="flex">
        <BoxItem>
          <Badge count={1} size="small">
            <AiOutlineBell />
          </Badge>
        </BoxItem>
        <BoxItem ml={1}>
          <img src={user.image} alt="" />
        </BoxItem>
        <BoxItem ml={1}>
          <FiSun />
        </BoxItem>
      </Box>
    </Box>
  )
}
