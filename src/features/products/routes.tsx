import { lazy } from "react"
import { AppRoute } from "types/IAppRoute"

const Products = lazy(() => import("."))

const productsRoutes: AppRoute[] = [
  {
    name: "common.products",
    path: "/products",
    exact: true,
    component: Products,
    requireAuth: true,
  },
]

export default productsRoutes
