import { Col, Row } from "antd"
import Box from "components/Box"
import React from "react"
import RecentlyActivity from "./components/RecentlyActivity"
import RevenueChart from "./components/RevenueChart"
import Statistic from "./components/Statistic"
import TradesChart from "./components/TradesChart"

export default function Home() {
  return (
    <>
      <Statistic />
      <Box mt={2}>
        <Row gutter={16}>
          <Col span={12}>
            <RevenueChart />
          </Col>
          <Col span={12}>
            <TradesChart />
          </Col>
        </Row>
      </Box>
      <Box mt={2}>
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
