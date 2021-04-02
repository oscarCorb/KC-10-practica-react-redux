import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Nodepop React</h1>
    </div>
  );
};

export default Header;
