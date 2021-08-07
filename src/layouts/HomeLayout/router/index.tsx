import customersRoutes from "features/customers/routes"
import homeRoutes from "features/home/routes"
import ordersRoutes from "features/orders/routes"
import productsRoutes from "features/products/routes"
import tradesRoutes from "features/trades/routes"
import React from "react"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { Route, Switch } from "react-router-dom"
import { AppRoute } from "types/AppRoute"

const routes: AppRoute[] = [
  ...homeRoutes,
  ...tradesRoutes,
  ...ordersRoutes,
  ...customersRoutes,
  ...productsRoutes,
]

export default function HomeLayoutRouter() {
  const { t } = useTranslation()

  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route
          path={`/app${route.path}`}
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
    </Switch>
  )
}
