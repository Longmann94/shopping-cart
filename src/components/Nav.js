import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div class='header-nav'>
      <Link to='/'> home </Link>
      <Link to='/shop'> shop </Link>
    </div>
  );
}

export default Nav;
