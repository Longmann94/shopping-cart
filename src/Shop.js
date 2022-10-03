import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div>
    <Link to='/'> home </Link>
    <Link to='/shop'> shop </Link>
    <Link to='/cart'> cart </Link>
      <h1>this is shop page</h1>
    </div>
  );
}

export default Shop;
