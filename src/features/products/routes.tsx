import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const ProductsPage = lazy(() => import("."))

const productsRoutes: AppRoute[] = [
  {
    name: "common.products",
    path: "/products",
    exact: true,
    component: ProductsPage,
    requireAuth: true,
  },
]

export default productsRoutes
