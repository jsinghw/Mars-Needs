import React from "react";
import { Switch, Route } from "./components";
import pages from "./pages";
import { Layout } from "./components/Layout";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Switch>
            {Object.entries(pages).map(([routeName, routeObj]) => (
              <Route
                key={routeName}
                exact
                path={routeObj.path}
                component={routeObj.component}
              />
            ))}
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
