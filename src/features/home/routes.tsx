import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const Home = lazy(() => import("."))

const homeRoutes: AppRoute[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
    requireAuth: true,
  },
]

export default homeRoutes
