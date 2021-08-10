import Box from "components/Box"
import Text from "components/Text"
import moment from "moment"
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
  time: Date
  value: number | string
}

let data: ChartData[] = []

for (let i = 23; i >= 0; i--)
  data.push({
    time: new Date(),
    value: Math.round(Math.random() * 10),
  })

export default function TradesChart() {
  const { t } = useTranslation()

  return (
    <Box p={2}>
      <Text size="16" weight="600">
        {t("home.tradesInDay")}
      </Text>
      <ResponsiveContainer height={270}>
        <AreaChart data={data} margin={{ left: 16, right: 16 }}>
          <CartesianGrid strokeDasharray="10" vertical={false} />
          <Tooltip
            labelFormatter={(time) => moment(time).format("HH:mm DD/MM")}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={colors.success}
            strokeWidth={3}
            fillOpacity={0.12}
            fill={colors.success}
            dot
            name={t("common.trades")}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            height={40}
          />
          <XAxis
            dataKey="time"
            tickFormatter={(time) => moment(time).format("HH:mm")}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}
