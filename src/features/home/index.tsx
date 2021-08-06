import { Col, Row } from "antd"
import Box from "components/Box"
import React from "react"
import RevenueChart from "./components/RevenueChart"
import StatisticCards from "./components/StatisticCards"

export default function Home() {
  return (
    <>
      <StatisticCards />
      <Box mt={2} backgroundColor="transparent">
        <Row gutter={16}>
          <Col span={12}>
            <RevenueChart />
          </Col>
          <Col span={12}>Hi</Col>
        </Row>
      </Box>
    </>
  )
}
