import homeRoutes from "features/home/routes"
import signInRoutes from "features/signin/routes"
import { BrowserRouter as Router, Route } from "react-router-dom"

const routes = [...homeRoutes, ...signInRoutes]

function AppRouter() {
  return (
    <Router>
      {routes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Router>
  )
}

export default AppRouter
