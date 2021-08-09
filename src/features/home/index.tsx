import { Col, Row } from "antd"
import Box from "components/Box"
import React from "react"
import RecentlyActivity from "./components/RecentlyActivity"
import RevenueChart from "./components/RevenueChart"
import StatisticCards from "./components/StatisticCards"
import TradesChart from "./components/TradesChart"

export default function Home() {
  return (
    <>
      <StatisticCards />
      <Box mt={2} backgroundColor="transparent">
        <Row gutter={16}>
          <Col span={12}>
            <RevenueChart />
          </Col>
          <Col span={12}>
            <TradesChart />
          </Col>
        </Row>
      </Box>
      <Box mt={2} backgroundColor="transparent">
        <Row gutter={16}>
          <Col span={12}>
            <RecentlyActivity />
          </Col>
          <Col span={12}></Col>
        </Row>
      </Box>
    </>
  )
}
