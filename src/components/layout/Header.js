import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLogged } from '../../store/selectors';
import './Header.css';

const Header = ({ isLogged, ...props }) => {
  return (
    <div className="header">
      <div className="nav-bar">
        <h1 className="title">Nodepop React</h1>
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
    </div>
  );
};

const mapStateToProps = (state) => ({ isLogged: getIsLogged(state) });

export default connect(mapStateToProps)(Header);
