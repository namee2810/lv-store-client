import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const CustomersPage = lazy(() => import("."))

const customersRoutes: AppRoute[] = [
  {
    name: "common.customers",
    path: "/customers",
    exact: true,
    component: CustomersPage,
    requireAuth: true,
  },
]

export default customersRoutes
