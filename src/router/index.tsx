import { AppRoute } from "defines/AppRoute"
import homeRoutes from "features/home/routes"
import signInRoutes from "features/signin/routes"
import { BrowserRouter as Router, Route } from "react-router-dom"

const routes: AppRoute[] = [...homeRoutes, ...signInRoutes]

function AppRouter() {
  return (
    <Router>
      {routes.map((route, idx) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={"route" + idx}
        />
      ))}
    </Router>
  )
}

export default AppRouter
