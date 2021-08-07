import Box from "components/Box"
import Text from "components/Text"
import React from "react"
import { useTranslation } from "react-i18next"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"
import { colors } from "styles"

const data = [
  {
    name: "8/8",
    renevue: 4000,
    profit: 2400,
  },
  {
    name: "9/8",
    renevue: 3000,
    profit: 2400,
  },
  {
    name: "10/8",
    renevue: 6000,
    profit: 2400,
  },
  {
    name: "11/8",
    renevue: 2000,
    profit: 2400,
  },
  {
    name: "12/8",
    renevue: 4000,
    profit: 2400,
  },
  {
    name: "13/8",
    renevue: 4000,
    profit: 2400,
  },
  {
    name: "14/8",
    renevue: 4000,
    profit: 2400,
  },
]

export default function RevenueChart() {
  const { t } = useTranslation()

  return (
    <Box p={2} elevation={1}>
      <Text size="16" weight="600">
        Revenue
      </Text>
      <Box mt={2}>
        <ResponsiveContainer height={250}>
          <AreaChart data={data} margin={{ left: 16, right: 16 }}>
            <CartesianGrid strokeDasharray="10" vertical={false} />
            <Tooltip
              formatter={(value: any) => `${value.toLocaleString()} VND`}
            />
            <Area
              type="monotone"
              dataKey="renevue"
              stroke={colors.success}
              strokeWidth={3}
              fillOpacity={0.12}
              fill={colors.success}
              dot
              name={t("home.revenue")}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke={colors.primary}
              strokeWidth={3}
              fillOpacity={0.12}
              fill={colors.primary}
              dot
              name={t("home.profit")}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={10}
              height={40}
            />
            <XAxis dataKey="name" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
