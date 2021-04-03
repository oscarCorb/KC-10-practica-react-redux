import { useState } from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

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
    <Router>
      {/* <Route>
        <Redirect to={{ pathname: '/login' }} />
      </Route> */}

      <Route path="/">
        {/* cuando recargas, te lleva directo a esta */}
        <Redirect to="/adverts" />
      </Route>

      <Route path="/login" component={LoginPage} />
      <Route path="/adverts" exact component={ProudctListPage} />
      <Route path="/advert/new" component={CreateNewProductPage} />
      <Route path="/adverts/:id" component={ProudctDetailPage} />
      {/* <Route path={`/adverts/${productDetailId}`} component={ProudctDetailPage} /> */}
      {/* // Hacer página NOT FOUND */}
      {/* <Route path="/advert/new" component="" /> */}
    </Router>
  );
}

export default App;
