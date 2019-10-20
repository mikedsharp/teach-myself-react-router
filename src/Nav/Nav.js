import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
export function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/things">Things</Link>
        </li>
      </ul>
    </nav>
  );
}
