import Box from "components/Box"
import Text from "components/Text"
import React from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"

interface CardProps {
  name: string
  value: string
  grow: number
}

export default function Card({ name, value, grow = 0 }: CardProps) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="100px"
      elevation={1}
      p={2}
    >
      <Box>
        <Box>
          <Text size="16" weight="600" color="gray">
            {name}
          </Text>
        </Box>
        <Box>
          <Text size="24">{value}</Text>
        </Box>
      </Box>
      <Box>
        <Text color={grow >= 0 ? "success" : "error"} size="16">
          {grow >= 0 ? "+" : ""}
          {grow + "%"}
          {grow >= 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </Text>
      </Box>
    </Box>
  )
}
