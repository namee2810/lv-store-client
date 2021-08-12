import { Tag } from "antd"
import Column from "antd/lib/table/Column"
import Box from "components/Box"
import Table from "components/Table"
import Text from "components/Text"
import moment from "moment"
import React, { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import colors from "styles/colors"

interface Activity {
  id: string
  user: string
  type: string
  action: string
  time: Date
}

const dataSource: Activity[] = [
  {
    id: "1",
    user: "Dao Nam",
    type: "TRADE",
    action: "CREATE",
    time: new Date(),
  },
  {
    id: "5",
    user: "Dao Nam",
    type: "TRADE",
    action: "CREATE",
    time: new Date(),
  },
  {
    id: "2",
    user: "Dao Nam",
    type: "TRADE",
    action: "DELETE",
    time: new Date(),
  },
  {
    id: "3",
    user: "Dao Nam",
    type: "ORDER",
    action: "UPDATE",
    time: new Date(),
  },
  {
    id: "4",
    user: "Dao Nam",
    type: "CUSTOMER",
    action: "UPDATE",
    time: new Date(),
  },
]

export default function RecentlyActivity() {
  const { t } = useTranslation()

  const renderType = (value: string): string =>
    t(`common.types.${value.toLowerCase()}`)

  const renderAction = (value: string): ReactNode => {
    const text = t(`common.actions.${value.toLowerCase()}`)
    let color = ""
    if (value === "CREATE") color = colors.success
    else if (value === "DELETE") color = colors.error
    else if (value === "UPDATE") color = colors.primary
    return <Tag color={color}>{text}</Tag>
  }

  const renderTime = (value: Date): string =>
    moment(value).format("HH:mm DD/MM/YY ")

  return (
    <Box p={2} backgroundColor="box">
      <Text size="16" weight="600">
        {t("home.recentlyActivity")}
      </Text>
      <Box mt={2}>
        <Table dataSource={dataSource} pagination={false} rowKey="id">
          <Column title={t("common.name")} dataIndex="user" />
          <Column
            title={t("common.type")}
            dataIndex="type"
            render={renderType}
            align="center"
          />
          <Column
            title={t("common.action")}
            dataIndex="action"
            render={renderAction}
            align="center"
          />
          <Column
            title={t("common.time")}
            dataIndex="time"
            render={renderTime}
            align="right"
          />
        </Table>
      </Box>
    </Box>
  )
}
