import { Tag } from "antd"
import React from "react"
import { useTranslation } from "react-i18next"
import ActionType from "types/IAction"
import ActivityType from "types/IActivity"

interface TagProps {
  type: "action" | "feature"
  value: ActionType | ActivityType
}

export default function CustomTag({ type, value }: TagProps) {
  const { t } = useTranslation()

  return <Tag>{t(`${type}.${value.toLowerCase()}`)}</Tag>
}
