import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div class='header-nav'>
      <Link to='/'> HOME </Link>
      <Link to='/shop'> SHOP </Link>
    </div>
  );
}

export default Nav;
