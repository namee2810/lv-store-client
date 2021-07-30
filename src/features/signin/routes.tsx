import { lazy } from "react"
import { AppRoute } from "types/AppRoute"

const SignIn = lazy(() => import("."))

const signInRoutes: AppRoute[] = [
  {
    name: "Sign in",
    path: "/signin",
    exact: true,
    component: SignIn,
    requireAuth: false,
  },
]

export default signInRoutes
