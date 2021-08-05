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
      px={2}
      py={1}
      elevation={1}
    >
      <Box display="flex">
        <BoxItem>
          <Badge count={1} size="small">
            <AiOutlineBell />
          </Badge>
        </BoxItem>
        <BoxItem ml={2}>
          <img src={user.image} alt="" />
        </BoxItem>
        <BoxItem ml={2}>
          <FiSun />
        </BoxItem>
      </Box>
    </Box>
  )
}
