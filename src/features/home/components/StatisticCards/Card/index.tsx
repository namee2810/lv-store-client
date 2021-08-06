import Box from "components/Box"
import Text from "components/Text"
import React from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { colors } from "styles"

interface CardProps {
  name: string
  value: string
  grow: number
}

const data = [
  {
    value: 500,
  },
  {
    value: 200,
  },
  {
    value: 500,
  },
  {
    value: 300,
  },
  {
    value: 50,
  },
  {
    value: 1000,
  },
]

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
        <Box>
          <ResponsiveContainer width={100} height={20}>
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={colors.primary}
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Box>
          <Text color={grow >= 0 ? "success" : "error"} size="16" align="right">
            {grow >= 0 ? "+" : ""}
            {grow + "%"}
            {grow >= 0 ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
