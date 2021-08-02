import { Tooltip } from "antd"
import Box from "components/Box"
import BoxItem from "components/BoxItem"
import Logo from "components/Logo"
import useAuth from "hooks/useAuth"
import React from "react"
import { useTranslation } from "react-i18next"
import {
  AiOutlineHome,
  AiOutlinePoweroff,
  AiOutlineSafetyCertificate,
} from "react-icons/ai"
import { BiCreditCardAlt } from "react-icons/bi"
import { FiTruck } from "react-icons/fi"
import { GoPackage } from "react-icons/go"
import { MdPeopleOutline } from "react-icons/md"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const BoxItemSignOut = styled(BoxItem)`
  &:hover {
    background-color: #f00;
    color: #fff;
  }
`

const items = [
  {
    name: "common.home",
    icon: <AiOutlineHome />,
    href: "/",
  },
  {
    name: "common.trades",
    icon: <BiCreditCardAlt />,
    href: "/trades",
  },
  {
    name: "common.orders",
    icon: <FiTruck />,
    href: "/orders",
  },
  {
    name: "common.customers",
    icon: <MdPeopleOutline />,
    href: "/customers",
  },
  {
    name: "common.products",
    icon: <GoPackage />,
    href: "/products",
  },
  {
    name: "common.users",
    icon: <AiOutlineSafetyCertificate />,
    href: "/users",
  },
]

export default function SideBar() {
  const { t } = useTranslation()
  const { signOut } = useAuth()

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
          <NavLink
            to={item.href}
            key={"sidebar" + idx}
            activeClassName="active-link"
          >
            <Tooltip title={t(item.name)} placement="right">
              <BoxItem mb={2}>{item.icon}</BoxItem>
            </Tooltip>
          </NavLink>
        ))}
      </div>
      <Tooltip title={t("common.signOut")} placement="right">
        <BoxItemSignOut onClick={signOut}>
          <AiOutlinePoweroff />
        </BoxItemSignOut>
      </Tooltip>
    </Box>
  )
}
