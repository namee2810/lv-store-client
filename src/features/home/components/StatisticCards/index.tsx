import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Card from "../Card"
import { Container } from "./styled"

export default function StatisticCards() {
  const { t } = useTranslation()

  return (
    <Container>
      <Link to="/app/trades">
        <Card name={t("home.revenueInDay")} value="100$" grow={50}/>
      </Link>
      <Link to="/app/trades">
        <Card name={t("home.tradesInDay")} value="100$" grow={-50}/>
      </Link>
      <Link to="/app/orders">
        <Card name={t("home.totalOrders")} value="100$"  grow={50}/>
      </Link>
      <Link to="/app/customers">
        <Card name={t("home.totalCustomers")} value="100$"  grow={50}/>
      </Link>
      <Link to="/app/products">
        <Card name={t("home.totalProducts")} value="100$"  grow={-50}/>
      </Link>
    </Container>
  )
}
