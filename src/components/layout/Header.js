import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/context';
import './Header.css';

const Header = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <div className="header">
      <div className="nav-bar">
        <nav>
          <ul>
            <li>
              <Link to="/adverts">Home</Link>
            </li>
            <li>
              <Link to="/advert/new">New</Link>
            </li>
            <li>
              {!isLogged ? (
                <Link to="/login">Login</Link>
              ) : (
                <Link to="/logout">Logout</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <h1>Nodepop React</h1>
    </div>
  );
};

export default Header;
