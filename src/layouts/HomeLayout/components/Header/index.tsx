import { Badge, Dropdown, Switch } from "antd"
import EnFlag from "assets/images/en.svg"
import ViFlag from "assets/images/vi.svg"
import Box from "components/Box"
import BoxItem from "components/BoxItem"
import Menu from "components/Menu"
import Text from "components/Text"
import useAppDispatch from "hooks/useAppDispatch"
import useAppSelector from "hooks/useAppSelector"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai"
import { BiMoon, BiSun } from "react-icons/bi"
import { SET_THEME } from "store/slices/settings"

export default function Header() {
  const { user } = useAppSelector((state) => state.user)
  const { theme } = useAppSelector((state) => state.settings)
  const dispatch = useAppDispatch()
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const [settingsMenuVisible, setSettingsMenuVisible] = useState(false)

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  const handleChangeTheme = (checked: boolean) => {
    if (checked) dispatch(SET_THEME("light"))
    else dispatch(SET_THEME("dark"))
  }

  const SettingsMenu = (
    <Menu>
      <Menu.Item>
        <Box display="flex" justifyContent="space-between">
          <Text>{t("header.settings.lang")}</Text>
          <Box display="flex" ml={2}>
            <Box>
              <img
                src={ViFlag}
                alt=""
                width={"20px"}
                className={currentLang === "vi" ? "current-lang" : ""}
                onClick={() => handleChangeLang("vi")}
              />
            </Box>
            <Box ml={0.5}>
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
        <Box display="flex" justifyContent="space-between">
          <Text>{t("header.settings.theme")}</Text>
          <Box display="flex" alignItems="center" ml={2}>
            <Switch
              checkedChildren={<BiSun />}
              unCheckedChildren={<BiMoon />}
              defaultChecked={theme === "light"}
              className="theme-switch"
              onChange={handleChangeTheme}
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
      backgroundColor="box"
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
