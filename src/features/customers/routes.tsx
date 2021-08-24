import { lazy } from "react"
import { AppRoute } from "types/IAppRoute"

const Customers = lazy(() => import("."))

const customersRoutes: AppRoute[] = [
  {
    name: "common.customers",
    path: "/customers",
    exact: true,
    component: Customers,
    requireAuth: true,
  },
]

export default customersRoutes
