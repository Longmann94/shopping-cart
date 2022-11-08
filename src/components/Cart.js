import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { useLocation } from 'react-router-dom';

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
          cart.length === 0 &&  <div className='empty-cart-message'> you got nothing in your cart :( </div>
        }

        {
          cart.map(item => {
            return (
              <div className='cart-list' key={item.key}>
                <CartItem item={item} />
                <div>
                  <label htmlFor={item.id}>Amount:</label>
                  <input type='number' id={item.id} value={item.quantity} onChange={handleChange}></input>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className='total-cart-cost'>Total Cost of items: ${totalSum}. <button>Check Out</button></div>
    </div>
      );
}

export default Cart;
