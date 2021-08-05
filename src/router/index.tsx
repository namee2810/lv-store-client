import NotFoundScreen from "components/NotFoundScreen"
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
    path: "/app",
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
        <Route path="/" exact>
          <Redirect to="/app" />
        </Route>
        {routes.map((route, idx) => (
          <Route
            path={route.path}
            exact={route.exact}
            render={() => (
              <>
                {/* {!name && route.requireAuth && <Redirect to="/signin" />}
                {name && !route.requireAuth && <Redirect to="/app" />} */}
                <Helmet titleTemplate="LV Store | %s" title={t(route.name)} />
                <route.component />
              </>
            )}
            key={"route" + idx}
          />
        ))}
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Router>
  )
}
