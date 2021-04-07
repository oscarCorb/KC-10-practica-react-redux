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

  return (
    <Router>
      <PrivateRoute />

      <Switch>
        <PrivateRoute exact path="/advert/new" isLogged={isLogged}>
          <CreateNewProductPage />
        </PrivateRoute>

        <PrivateRoute
          path="/advert/:id"
          isLogged={isLogged}
          component={ProudctDetailPage}
        ></PrivateRoute>

        <PrivateRoute exact path="/adverts" isLogged={isLogged}>
          <ProudctListPage />
        </PrivateRoute>

        <PrivateRoute exact path="/" isLogged={isLogged}>
          <Redirect to="/adverts" />
        </PrivateRoute>

        <Route exact path="/login">
          <LoginPage setIsLogged={setIsLogged} />
        </Route>

        <Route path="/404" isLogged={isLogged}>
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
