import Box from "components/Box"
import Button from "components/Button"
import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Text404 = styled.div`
  font-size: 72px;
`

export default function NotFoundScreen() {
  const { t } = useTranslation()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text404>404</Text404>
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt=""
      />
      <Link to="/app">
        <Button color="success" size="large">
          {t("common.gotoHome")}
        </Button>
      </Link>
    </Box>
  )
}
