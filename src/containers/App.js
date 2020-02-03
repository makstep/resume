// @flow
import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import LocaleContext from '../contexts/Locale'
import * as routes from '../routes'
import Resume from '../components/Resume'
import { RU_LOCALE, EN_LOCALE } from '../constants'

class App extends Component<any, any> {
  routeWithLocale(route: string, locale: string) {
    return (
      <Route
        exact
        path={route}
        render={() => (
          <LocaleContext.Provider value={locale}>
            <Resume />
          </LocaleContext.Provider>
        )}
      />
    )
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter basename={routes.baseURL}>
          <div>
            <Route
              exact
              path={routes.root}
              render={() => <Redirect from={routes.root} to={routes.ru} />}
            />

            {this.routeWithLocale(routes.ru, RU_LOCALE)}
            {this.routeWithLocale(routes.en, EN_LOCALE)}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
