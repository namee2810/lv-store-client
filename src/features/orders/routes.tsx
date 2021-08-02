import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const OrdersPage = lazy(() => import("."))

const ordersRoutes: AppRoute[] = [
  {
    name: "common.orders",
    path: "/orders",
    exact: true,
    component: OrdersPage,
    requireAuth: true,
  },
]

export default ordersRoutes
