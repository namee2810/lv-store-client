import homeRoutes from "features/home/routes"
import signInRoutes from "features/signIn/routes"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AppRoute } from "types/AppRoute"

const routes: AppRoute[] = [...homeRoutes, ...signInRoutes]

function AppRouter() {
  const { t } = useTranslation()

  return (
    <Router>
      {routes.map((route, idx) => (
        <Route
          path={route.path}
          exact={route.exact}
          render={() => (
            <>
              <Helmet titleTemplate="LV Store | %s" title={t(route.name)} />
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
