import React, { Component, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Redirect, HashRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './store';

// const CustomHeader = lazy(() => import('./components/layout/Header'));
const Home = lazy(() => import('./components/home/Home'));
const Cart = lazy(() => import('./components/cart/Cart'));

const NoMatchComponent = ({ location }) => {
  return (
    <div>
      <h3>
        No Match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

class App extends Component {
  render() {
    const { store } = configureStore();
    return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={'Loading...'}>
            {/* <CustomHeader /> */}
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route component={NoMatchComponent} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    );
  }
}

export default App;
