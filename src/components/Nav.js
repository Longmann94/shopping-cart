import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Nav = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    let id = e.target.id;
    if(id === 'home'){
       navigate('/');
    }
    if(id === 'shop'){
       navigate('/shop');
    }
    if(id === 'cart'){
       navigate('/cart');
    }
  }

  return (
    <div className='header-nav'>
      <div>Logo/Home button</div>
      <TextField id="standard-basic" label="Search for stuff..." variant="standard" sx={{ width: '100%' }}/>
      <ButtonGroup>
        <IconButton onClick={handleClick} id='home'> <HomeIcon /> Home </IconButton>
        <IconButton onClick={handleClick} id='shop'> <StoreIcon /> Store </IconButton>
        <IconButton onClick={handleClick} id='cart'> <ShoppingCartIcon /> Cart </IconButton>
      </ButtonGroup>
    </div>
  );
}

export default Nav;
