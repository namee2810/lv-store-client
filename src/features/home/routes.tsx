import Home from "."

const homeRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
    requireAuth: true,
  },
]

export default homeRoutes
