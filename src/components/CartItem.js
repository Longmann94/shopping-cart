import React from 'react';

const CartItem = (props) => {

  return(
    <div className="cart-item">
      <img src='https://picsum.photos/150/150' />
      <div>
      <div className='item-name'>Product name: {props.item.name}</div>
      <div className='item-price'>Price: ${props.item.price}</div>
      <div className='item-details'>Details: {props.item.details}</div>
      <div className='item-quantity'>Quantity: {props.item.quantity}</div>
      </div>
    </div>
  );
}

export default CartItem;
