import signInRoutes from "features/signIn/routes"
import useAppSelector from "hooks/useAppSelector"
import HomeLayout from "layouts/HomeLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import { AppRoute } from "types/AppRoute"

const routes: AppRoute[] = [
  {
    name: "common.home",
    path: "/",
    exact: false,
    component: HomeLayout,
    requireAuth: true,
  },
  ...signInRoutes,
]

export default function AppRouter() {
  const { t } = useTranslation()
  const {
    user: { name },
  } = useAppSelector((state) => state.user)

  return (
    <Router>
      <Switch>
        {routes.map((route, idx) => (
          <Route
            path={route.path}
            exact={route.exact}
            render={() => (
              <>
                {!name && route.requireAuth && <Redirect to="/signin" />}
                {name && !route.requireAuth && <Redirect to="/" />}
                <Helmet titleTemplate="LV Store | %s" title={t(route.name)} />
                <route.component />
              </>
            )}
            key={"route" + idx}
          />
        ))}
      </Switch>
    </Router>
  )
}
