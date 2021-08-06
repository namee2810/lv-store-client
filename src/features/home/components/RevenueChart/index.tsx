import Box from "components/Box"
import Text from "components/Text"
import React from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { colors } from "styles"

const data = [
  {
    name: "Page A",
    renevue: 4000,
    profit: 2400,
  },
  {
    name: "Page B",
    renevue: 3000,
    profit: 2400,
  },
  {
    name: "Page C",
    renevue: 6000,
    profit: 2400,
  },
  {
    name: "Page D",
    renevue: 2000,
    profit: 2400,
  },
  {
    name: "Page E",
    renevue: 4000,
    profit: 2400,
  },
  {
    name: "Page F",
    renevue: 4000,
    profit: 2400,
  },
  {
    name: "Page G",
    renevue: 4000,
    profit: 2400,
  },
]

export default function RevenueChart() {
  return (
    <Box p={2}>
      <Text size="16" weight="600">
        Revenue
      </Text>
      <Box mt={2}>
        <ResponsiveContainer width={730} height={250}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="renevue"
              stroke={colors.success}
              strokeWidth={3}
              fillOpacity={0.12}
              fill={colors.success}
              dot
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke={colors.primary}
              strokeWidth={3}
              fillOpacity={0.12}
              fill={colors.primary}
              dot
            />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
