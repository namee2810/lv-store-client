import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const Home = lazy(() => import("."))

const homeRoutes: AppRoute[] = [
  {
    name: "home.home",
    path: "/",
    exact: true,
    component: Home,
    requireAuth: true,
  },
]

export default homeRoutes
