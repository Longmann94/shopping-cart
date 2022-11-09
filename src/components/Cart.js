import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { useLocation } from 'react-router-dom';

import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Cart = ({ cart, handleChange }) => {



  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {

    const itemsPrice = [];
    const sum = cart.forEach(item => {
      let itemCost = item.quantity*item.price;
      itemsPrice.push(itemCost);
    });
    const initalPrice = 0;
    const sumWithInitalPrice = itemsPrice.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initalPrice
    );

    setTotalSum(sumWithInitalPrice);

  }, [cart]);



  return(
    <div>
      <div className='cart-items'>

        {
          cart.length === 0 &&  <div className='empty-cart-message'>
            <p>You've got nothing in your cart :(</p>
            <p>Surely you must be interested in some of these super random items :)</p>
          </div>
        }

        {
          cart.map(item => {
            return (
              <div className='cart-list' key={item.key}>
                <CartItem item={item} />
                <div className='cart-quantity-input'>
                  <label htmlFor={item.id}>Amount:</label>
                  <input type='number' id={item.id} value={item.quantity} onChange={handleChange}></input>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className='total-cart-cost'>Total Cost of items: ${totalSum}. <Button variant='contained' size='large'><ShoppingCartCheckoutIcon />Check Out</Button></div>
    </div>
      );
}

export default Cart;
