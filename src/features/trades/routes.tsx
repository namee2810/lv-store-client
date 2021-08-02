import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const TradesPage = lazy(() => import("."))

const tradesRoutes: AppRoute[] = [
  {
    name: "common.trades",
    path: "/trades",
    exact: true,
    component: TradesPage,
    requireAuth: true,
  },
]

export default tradesRoutes
