import { AppRoute } from "defines/AppRoute"
import homeRoutes from "features/home/routes"
import signInRoutes from "features/signIn/routes"
import { Helmet } from "react-helmet"
import { BrowserRouter as Router, Route } from "react-router-dom"

const routes: AppRoute[] = [...homeRoutes, ...signInRoutes]

function AppRouter() {
  return (
    <Router>
      {routes.map((route, idx) => (
        <Route
          path={route.path}
          exact={route.exact}
          render={() => (
            <>
              <Helmet titleTemplate="LV Store | %s" title={route.name} />
              <route.component />
            </>
          )}
          key={"route" + idx}
        />
      ))}
    </Router>
  )
}

export default AppRouter
