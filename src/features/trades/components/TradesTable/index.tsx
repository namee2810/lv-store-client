import { Tag } from "antd"
import Box from "components/Box"
import React from "react"
import { useTranslation } from "react-i18next"
import colors from "styles/colors"
import Trade, { TradeProduct, TradeStatus } from "types/ITrade"

const dataSource: Trade[] = [
  {
    id: "1",
    customer: {
      id: "1",
      name: "Dao Nam",
    },
    products: [
      {
        id: "1",
        name: "Keo 502",
        quantity: 10,
        sellPrice: 5000,
      },
    ],
    status: "UNPAID",
    note: "Note ne",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    customer: {
      id: "1",
      name: "Dao Nam",
    },
    products: [
      {
        id: "1",
        name: "Keo 502",
        quantity: 10,
        sellPrice: 5000,
      },
    ],
    status: "PARTICALPAID",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    customer: {
      id: "1",
      name: "Dao Nam",
    },
    products: [
      {
        id: "1",
        name: "Keo 502",
        quantity: 10,
        sellPrice: 5000,
      },
    ],
    status: "PAID",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    customer: {
      id: "1",
      name: "Dao Nam",
    },
    products: [
      {
        id: "1",
        name: "Keo 502",
        quantity: 10,
        sellPrice: 5000,
      },
    ],
    status: "PAID",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    customer: {
      id: "1",
      name: "Dao Nam",
    },
    products: [
      {
        id: "1",
        name: "Keo 502",
        quantity: 10,
        sellPrice: 5000,
      },
      {
        id: "1",
        name: "Keo 502",
        quantity: 10,
        sellPrice: 5000,
      },
    ],
    status: "PENDING",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
const renderTotalAmount = (products: TradeProduct[]) =>
  products
    .reduce((total, current) => (total += current.quantity * current.sellPrice), 0)
    .toLocaleString() + "đ"

const renderStatus = (status: TradeStatus, text: string) => {
  let color = "primary"
  switch (status) {
    case "PAID":
      color = colors.success
      break
    case "PARTICALPAID":
      color = colors.warn
      break
    case "UNPAID":
      color = colors.error
      break
    case "PENDING":
      color = colors.primary
      break
  }
  return <Tag color={color}>{text}</Tag>
}
const renderNote = (note: string) => (note ? note : "-")

export default function TradesTable() {
  const { t } = useTranslation()

  const handleRowClick = (event: any) => {
    console.log(event)
  }

  return (
    <Box mt={2} pt={2} px={2} backgroundColor="box">
      {/* <table
        dataSource={dataSource}
        rowKey="id"
        pagination={{ position: ["bottomCenter"] }}
        onRow={(record, rowIndex) => ({
          onClick: handleRowClick,
        })}
      >
        <Column title={t("common.customerName")} dataIndex={["customer", "name"]} />
        <Column
          title={t("common.purchasedProducts")}
          dataIndex="products"
          align="center"
          render={(products) => `${products.length} products`}
        />
        <Column
          title={t("common.totalAmount")}
          dataIndex="products"
          align="center"
          render={renderTotalAmount}
        />
        <Column
          title={t("common.status")}
          dataIndex="status"
          align="center"
          render={(status) => renderStatus(status, t(`common.paymentStatus.${status}`))}
        />
        <Column title={t("common.note")} dataIndex="note" align="center" render={renderNote} />
        <Column
          title={t("common.createdAt")}
          dataIndex="createdAt"
          align="center"
          render={renderTime}
        />
        <Column
          title={t("common.updatedAt")}
          dataIndex="updatedAt"
          align="right"
          render={renderTime}
        />
        <Column
          title={t("common.action")}
          dataIndex="updatedAt"
          align="right"
          render={renderTime}
        />
      </table> */}
    </Box>
  )
}
