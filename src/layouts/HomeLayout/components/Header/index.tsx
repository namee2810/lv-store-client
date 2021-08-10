import { Badge, Dropdown, Menu, Switch } from "antd"
import EnFlag from "assets/images/en.svg"
import ViFlag from "assets/images/vi.svg"
import Box from "components/Box"
import BoxItem from "components/BoxItem"
import useAppSelector from "hooks/useAppSelector"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai"
import { BiMoon, BiSun } from "react-icons/bi"

export default function Header() {
  const user = useAppSelector((state) => state.user.user)
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false)

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const SettingsMenu = (
    <Menu selectable={false}>
      <Menu.Item>
        <Box
          display="flex"
          justifyContent="space-between"
          backgroundColor="transparent"
        >
          <Box backgroundColor="transparent">{t("header.settings.lang")}</Box>
          <Box display="flex" ml={2} backgroundColor="transparent">
            <Box backgroundColor="transparent">
              <img
                src={ViFlag}
                alt=""
                width={"20px"}
                className={currentLang === "vi" ? "current-lang" : ""}
                onClick={() => handleChangeLang("vi")}
              />
            </Box>
            <Box ml={0.5} backgroundColor="transparent">
              <img
                src={EnFlag}
                alt=""
                width="20px"
                className={currentLang === "en" ? "current-lang" : ""}
                onClick={() => handleChangeLang("en")}
              />
            </Box>
          </Box>
        </Box>
      </Menu.Item>
      <Menu.Item>
        <Box
          display="flex"
          justifyContent="space-between"
          backgroundColor="transparent"
        >
          <Box backgroundColor="transparent">{t("header.settings.theme")}</Box>
          <Box
            display="flex"
            alignItems="center"
            ml={2}
            backgroundColor="transparent"
          >
            <Switch
              checkedChildren={<BiSun />}
              unCheckedChildren={<BiMoon />}
              defaultChecked
              className="theme-switch"
            />
          </Box>
        </Box>
      </Menu.Item>
    </Menu>
  )

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row-reverse"
      px={2}
      py={1}
    >
      <Box display="flex">
        <BoxItem>
          <Badge count={1} size="small">
            <AiOutlineBell />
          </Badge>
        </BoxItem>
        <BoxItem ml={2}>
          <img src={user.image} alt="" />
        </BoxItem>
        <Dropdown
          overlay={SettingsMenu}
          trigger={["click"]}
          onVisibleChange={(flag) => setSettingsMenuVisible(flag)}
          visible={settingsMenuVisible}
        >
          <BoxItem ml={2}>
            <AiOutlineSetting />
          </BoxItem>
        </Dropdown>
      </Box>
    </Box>
  )
}
