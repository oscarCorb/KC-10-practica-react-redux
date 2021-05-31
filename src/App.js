import {
  Route,
  // BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';

import { PrivateRoute } from './components/auth';

import LoginPage from './components/auth/LoginPage';
import CreateNewProductPage from './components/products/CreateNewProductPage';
import NotFoundPage from './components/products/NotFoundPage/NotFoundPage';
import ProudctDetailPage from './components/products/ProudctDetailPage/ProudctDetailPage';
import ProudctListPage from './components/products/ProudctListPage/ProudctListPage';

import './App.css';
import LogoutPage from './components/auth/LogoutPage/LogoutPage';

function App() {
  // const [isLogged, setIsLogged] = useState(props.isInitiallyLogged);

  // const handleLogin = () => {};
  // const handleLogout = () => {};

  // const authValue = {
  //   isLogged: false,
  //   onLogout: handleLogout,
  //   onLogin: handleLogin,
  // };

  return (
    <Switch>
      <PrivateRoute exact path="/advert/new">
        <CreateNewProductPage />
      </PrivateRoute>

      <PrivateRoute
        path="/advert/:id"
        component={ProudctDetailPage}
      ></PrivateRoute>

      <PrivateRoute exact path="/adverts">
        <ProudctListPage />
      </PrivateRoute>

      <Route exact path="/">
        <Redirect to="/adverts" />
      </Route>

      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/logout">
        <LogoutPage />
      </Route>

      <Route path="/404">
        <NotFoundPage />
      </Route>

      <Route>
        <Redirect to="/404/" />
      </Route>
    </Switch>
  );
}

export default App;
