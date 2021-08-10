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

interface ChartData {
  date: string
  renevue: number
  profit: number
}

const data: ChartData[] = [
  {
    date: "8/8",
    renevue: 4000,
    profit: 2400,
  },
  {
    date: "9/8",
    renevue: 3000,
    profit: 2400,
  },
  {
    date: "10/8",
    renevue: 6000,
    profit: 2400,
  },
  {
    date: "11/8",
    renevue: 2000,
    profit: 2400,
  },
  {
    date: "12/8",
    renevue: 4000,
    profit: 2400,
  },
  {
    date: "13/8",
    renevue: 4000,
    profit: 2400,
  },
  {
    date: "14/8",
    renevue: 4000,
    profit: 2400,
  },
]

export default function RevenueChart() {
  const { t } = useTranslation()

  return (
    <Box p={2}>
      <Text size="16" weight="600">
        {t("common.revenue")}
      </Text>
      <ResponsiveContainer height={270}>
        <AreaChart data={data} margin={{ left: 16, right: 16 }}>
          <CartesianGrid strokeDasharray="10" vertical={false} />
          <Tooltip
            formatter={(value: number) => `${value.toLocaleString()} VND`}
          />
          <Area
            type="monotone"
            dataKey="renevue"
            stroke={colors.success}
            strokeWidth={3}
            fillOpacity={0.12}
            fill={colors.success}
            dot
            name={t("common.revenue")}
          />
          <Area
            type="monotone"
            dataKey="profit"
            stroke={colors.primary}
            strokeWidth={3}
            fillOpacity={0.12}
            fill={colors.primary}
            dot
            name={t("common.profit")}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            height={40}
          />
          <XAxis dataKey="date" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}
