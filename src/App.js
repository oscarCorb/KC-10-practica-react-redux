import { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';

function App(props) {
  const [isLogged, setIsLogged] = useState(props.isInitiallyLogged);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
