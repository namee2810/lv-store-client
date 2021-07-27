import { AppRoute } from "defines/App"
import SignIn from "."

const signInRoutes: AppRoute[] = [
  {
    path: "/signin",
    exact: true,
    component: SignIn,
    requireAuth: false,
  },
]

export default signInRoutes
