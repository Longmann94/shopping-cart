import React from 'react';
import Button from '@mui/material/Button';

const ItemCard = ( { item, handleClick } ) => {

  return(
    <div className="item-card">
      <img src='https://picsum.photos/150/150' />
      <div className='item-name'>{item.name}</div>
      <div className='item-price'>Price: ${item.price}</div>
      <div className='item-details'>Product Info:{item.details.slice(0, 24)}...</div>
      <Button variant='outlined' id={item.id} className='cart-button' onClick={handleClick}>Add to cart!</Button>
    </div>
  );
}

export default ItemCard;
