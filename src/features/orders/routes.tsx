import { lazy } from "react"
import { AppRoute } from "types/IAppRoute"

const Orders = lazy(() => import("."))

const ordersRoutes: AppRoute[] = [
  {
    name: "common.orders",
    path: "/orders",
    exact: true,
    component: Orders,
    requireAuth: true,
  },
]

export default ordersRoutes
