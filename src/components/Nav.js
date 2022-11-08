import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Nav = ({ handleClickNavigate }) => {



  return (
    <div className='header-nav'>
      <div>Random Items 4 Sale</div>
      <div className='search-box'>
        <TextField id="standard-basic" label="Search Store for Stuff..." variant="standard" sx={{ width: '100%' }}/>
        <Button onClick={handleClickNavigate} id='searchResults'> <SearchIcon /></Button>
      </div>
      <ButtonGroup>
        <IconButton onClick={handleClickNavigate} id='home'> <HomeIcon /> Home </IconButton>
        <IconButton onClick={handleClickNavigate} id='shop'> <StoreIcon /> Store </IconButton>
        <IconButton onClick={handleClickNavigate} id='cart'> <ShoppingCartIcon /> Cart </IconButton>
      </ButtonGroup>
    </div>
  );
}

export default Nav;
