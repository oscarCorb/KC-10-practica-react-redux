import { useState } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/auth';

import LoginPage from './components/auth/LoginPage';
import CreateNewProductPage from './components/products/CreateNewProductPage';
import NotFoundPage from './components/products/NotFoundPage/NotFoundPage';
import ProudctDetailPage from './components/products/ProudctDetailPage/ProudctDetailPage';
import ProudctListPage from './components/products/ProudctListPage/ProudctListPage';

import './App.css';

function App(props) {
  const [isLogged, setIsLogged] = useState(props.isInitiallyLogged);
  // console.log('props:::', props);
  // console.log('isLogged:::', isLogged);

  return (
    <Router>
      <PrivateRoute />
      <Switch>
        <PrivateRoute isLogged={isLogged} exact path="/advert/new">
          <CreateNewProductPage />
        </PrivateRoute>
        <PrivateRoute
          isLogged={isLogged}
          path="/advert/:id"
          component={ProudctDetailPage}
        ></PrivateRoute>
        <PrivateRoute isLogged={isLogged} exact path="/adverts">
          <ProudctListPage />
        </PrivateRoute>
        <PrivateRoute isLogged={isLogged} exact path="/">
          <Redirect to="/adverts" />
        </PrivateRoute>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route isLogged={isLogged} path="/404">
          <NotFoundPage />
        </Route>
        <Route isLogged={isLogged}>
          <Redirect to="/404/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
