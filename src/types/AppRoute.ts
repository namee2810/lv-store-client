import { ComponentType } from "react"

export interface AppRoute {
  name: string
  path: string
  exact: boolean
  component: ComponentType
  requireAuth: boolean
}
