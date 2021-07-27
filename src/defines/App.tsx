import { ComponentType } from "react"

export interface AppRoute {
  path: string
  exact: boolean
  component: ComponentType
  requireAuth: boolean
}
