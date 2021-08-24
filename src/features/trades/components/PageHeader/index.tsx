import Box from "components/Box"
import Button from "components/Button"
import Text from "components/Text"
import React from "react"
import { useTranslation } from "react-i18next"

export default function PageHeader() {
  const { t } = useTranslation()

  return (
    <Box display="flex" justifyContent="space-between">
      <Text size="20">{t("common.trades")}</Text>
      <Box display="flex">
        <Box>
          <Button color="error" disabled>
            {t("common.actions.delete")}
          </Button>
        </Box>
        <Box ml={1}>
          <Button color="success">{t("common.actions.create")}</Button>
        </Box>
      </Box>
    </Box>
  )
}
