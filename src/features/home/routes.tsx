import { AppRoute } from "defines/AppRoute"
import { lazy } from "react"

const Home = lazy(() => import("."))

const homeRoutes: AppRoute[] = [
  {
    path: "/",
    exact: true,
    component: Home,
    requireAuth: true,
  },
]

export default homeRoutes
