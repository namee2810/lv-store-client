import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const Trades = lazy(() => import("."))

const tradesRoutes: AppRoute[] = [
  {
    name: "common.trades",
    path: "/trades",
    exact: true,
    component: Trades,
    requireAuth: true,
  },
]

export default tradesRoutes
