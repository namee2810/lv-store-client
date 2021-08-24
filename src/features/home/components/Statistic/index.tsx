import Box from "components/Box"
import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Card from "./Card"

const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, auto));
  grid-gap: 16px;
`

export default function Statistic() {
  const { t } = useTranslation()

  return (
    <Container>
      <Link to="/app/trades">
        <Card name={t("home.revenueInDay")} value="100đ" grow={50} />
      </Link>
      <Link to="/app/trades">
        <Card name={t("home.tradesInDay")} value="100đ" grow={-50} />
      </Link>
      <Link to="/app/orders">
        <Card name={t("home.totalOrders")} value="100đ" grow={50} />
      </Link>
      <Link to="/app/customers">
        <Card name={t("home.totalCustomers")} value="100đ" grow={50} />
      </Link>
      <Link to="/app/products">
        <Card name={t("home.totalProducts")} value="100đ" grow={-50} />
      </Link>
    </Container>
  )
}
