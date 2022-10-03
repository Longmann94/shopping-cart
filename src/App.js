import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to='/'> home </Link>
      <Link to='/shop'> shop </Link>
      <Link to='cart'> cart </Link>
      <h1>this is the home page</h1>
    </div>
  );
}

export default App;
