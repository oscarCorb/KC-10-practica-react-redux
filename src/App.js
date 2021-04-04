import { useState } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import './App.css';

import LoginPage from './components/auth/LoginPage';
import CreateNewProductPage from './components/products/CreateNewProductPage';
import ProudctDetailPage from './components/products/ProudctDetailPage/ProudctDetailPage';
import ProudctListPage from './components/products/ProudctListPage/ProudctListPage';

function App(props) {
  const [isLogged, setIsLogged] = useState(props.isInitiallyLogged);
  // aquí debería ir el ID del product Detail para cambiarlo abajo por :id
  // ahora no tiene valor porque no lo estoy trayendo de ningún sitio
  // const [productDetailId, setProductDetailId] = useState('');

  return (
    <Switch>
      <Route path="/advert/new" component={CreateNewProductPage} />
      <Route path="/advert/:id" component={ProudctDetailPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/adverts" component={ProudctListPage} />
      <Route path="/">
        <Redirect to="/adverts" />
      </Route>

      {/* ProudctDetailPage} /> */}
      {/* // Hacer página NOT FOUND */}
    </Switch>
  );
}

export default App;
