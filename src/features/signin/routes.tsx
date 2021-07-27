import { AppRoute } from "defines/AppRoute"
import { lazy } from "react"

const SignIn = lazy(() => import("."))

const signInRoutes: AppRoute[] = [
  {
    path: "/signin",
    exact: true,
    component: SignIn,
    requireAuth: false,
  },
]

export default signInRoutes
