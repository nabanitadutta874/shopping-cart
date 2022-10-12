import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import './navbar.css';

const NavbarComponent = (props) => {
  const state = useSelector((state) => state);
  return (
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/carts">Carts<span className="badge">{state.numOfItems}</span></a>
      </li>
    </ul>
  );
};
export default NavbarComponent;

