import { Tooltip } from "antd"
import Box from "components/Box"
import Logo from "components/Logo"
import React from "react"
import {
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineSafetyCertificate,
} from "react-icons/ai"
import { BiCreditCardAlt } from "react-icons/bi"
import { FiTruck } from "react-icons/fi"
import { GoPackage } from "react-icons/go"
import { MdPeopleOutline } from "react-icons/md"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  margin-bottom: 16px;
  border-radius: 8px;

  transition: all 0.25s;
  cursor: pointer;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04), 0 3.4px 13.4px rgba(0, 0, 0, 0.06),
    0 15px 60px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 22px;
  }
`

export default function SideBar() {
  const items = [
    {
      name: "Trang chủ",
      icon: <AiOutlineHome />,
      href: "/",
    },
    {
      name: "Giao dịch",
      icon: <BiCreditCardAlt />,
      href: "/trades",
    },
    {
      name: "Đơn nhập kho",
      icon: <FiTruck />,
      href: "/orders",
    },
    {
      name: "Khách hàng",
      icon: <MdPeopleOutline />,
      href: "/customers",
    },
    {
      name: "Sản phẩm",
      icon: <GoPackage />,
      href: "/products",
    },
    {
      name: "Người dùng",
      icon: <AiOutlineSafetyCertificate />,
      href: "/users",
    },
  ]

  const handleClickSignOut = () => {}

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="100%"
      py={1}
      style={{ borderRight: "1px solid #eee" }}
    >
      <Logo />
      <div>
        {items.map((item, idx) => (
          <Link to={item.href} key={"sidebar" + idx}>
            <Tooltip title={item.name} placement="right">
              <Item>{item.icon}</Item>
            </Tooltip>
          </Link>
        ))}
      </div>
      <Item onClick={handleClickSignOut}>
        <AiOutlinePoweroff />
      </Item>
    </Box>
  )
}
