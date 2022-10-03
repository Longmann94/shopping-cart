import React from 'react';

const ItemCard = (props) => {

  return(
    <div className="item-card">
      <img src='https://picsum.photos/150/150' />
      <div className='item-name'>{props.item.name}</div>
      <div className='item-price'>{props.item.price}</div>
      <div className='item-details'>{props.item.details}</div>
      <button className='cart-button' id={props.item.id}>Add to cart!</button>
    </div>
  );
}

export default ItemCard;
