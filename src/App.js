// import { useState } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import './App.css';

import LoginPage from './components/auth/LoginPage';
import CreateNewProductPage from './components/products/CreateNewProductPage';
import NotFoundPage from './components/products/NotFoundPage/NotFoundPage';
import ProudctDetailPage from './components/products/ProudctDetailPage/ProudctDetailPage';
import ProudctListPage from './components/products/ProudctListPage/ProudctListPage';

function App(props) {
  // const [isLogged, setIsLogged] = useState(props.isInitiallyLogged);

  return (
    <Router>
      <Switch>
        <Route exact path="/advert/new">
          <CreateNewProductPage />
        </Route>
        <Route path="/advert/:id" component={ProudctDetailPage}></Route>
        <Route exact path="/adverts">
          <ProudctListPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/adverts" />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Route>
          <Redirect to="/404/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
