// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg';

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          <li>
            <Link to="/" className="link-styled">Store</Link>
          </li>
          <li>
            <Link to="/mac" className="link-styled">Mac</Link>
          </li>
          <li>
            <Link to="/ipad" className="link-styled">iPad</Link>
          </li>
          <li>
          <Link to="/iphone" className="link-styled">iPhone</Link>
          </li>
          <li>
            <Link to="/iwatches" className="link-styled">Watch</Link>
          </li>
          <li>
            <a className="link-styled">AirPods</a>
          </li>
          <li>
            <a className="link-styled">Tv & Home</a>
          </li>
          <li>
            <a className="link-styled">Entertainment</a>
          </li>
          <li>
            <a className="link-styled">Accessories</a>
          </li>
          <li>
            <a className="link-styled">Supports</a>
          </li>
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
