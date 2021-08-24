import { lazy } from "react"
import { AppRoute } from "types/IAppRoute"

const SignInPage = lazy(() => import("."))

const signInRoutes: AppRoute[] = [
  {
    name: "common.signIn",
    path: "/signin",
    exact: true,
    component: SignInPage,
    requireAuth: false,
  },
]

export default signInRoutes
