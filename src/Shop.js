import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import ItemCard from './components/ItemCard';
import uniqid from 'uniqid';
import Nav from './components/Nav';
import CartItem from './components/CartItem';

const Shop = () => {

  const [itemsArr, setItemsArr] = useState([
    {
      key: uniqid(),
      id: 'i01',
      name: 'Pen',
      price: 1.5,
      quantity: 1,
      details: 'this is a pen',
    },
    {
      key: uniqid(),
      id: 'i02',
      name: 'Necklace',
      price: 300,
      quantity: 1,
      details: 'this is an expensive necklace',
    },
    {
      key: uniqid(),
      id: 'i03',
      name: 'Pet food',
      price: 10,
      quantity: 1,
      details: 'this is food for your pets',
    },
  ]);

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const cartBtn = document.querySelectorAll('.cart-button');
    const onClick = (e) => {
      const itemId = e.target.id;
      const item = itemsArr.find(item => item.id == itemId);
      const checkCart = cart.find(cartItem => cartItem.id == item.id);

      if(checkCart){
        checkCart.quantity = checkCart.quantity + 1;
      }else{
        setCart([
          ...cart, item
        ]);
      }

      const itemsQuantity = [];
      const sum = cart.forEach(item => {
        itemsQuantity.push(item.quantity);
      });
      const initalQuantity = 0;
      const sumWithInitalValue = itemsQuantity.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initalQuantity
      );

      setCartQuantity(sumWithInitalValue);
    }
    cartBtn.forEach(btn => btn.addEventListener('click', onClick));

    return () => {
      cartBtn.forEach(btn => btn.removeEventListener('click', onClick));
    }
  });

  useEffect(() => {
    setCartQuantity(cartQuantity);
  },[cartQuantity]);


  return (
    <div>
      <div className="cart-container">
        cart have {cartQuantity} items
        <Link to='/cart' state={cart}> Show Cart </Link>
      </div>
      <div className="store-container">

        {itemsArr.map(item => {
          return <ItemCard item={item} key={item.key}/>
        })}
      </div>
    </div>
  );
}

const Cart = () => {

  const sortAlphabetical = (arr) => {
    return arr.sort((a, b) => {
      let fa = a.name.toLowerCase();
      let fb = b.name.toLowerCase();

      if(fa < fb) {
        return -1;
      }
      if(fa > fb) {
        return 1;
      }
      return 0
    });
  }

  const location = useLocation();
  const state = location.state;
  const [currentCart, setCurrentCart] = useState(sortAlphabetical([...state]));
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {

    const itemsPrice = [];
    const sum = currentCart.forEach(item => {
      let itemCost = item.quantity*item.price;
      itemsPrice.push(itemCost);
    });
    const initalPrice = 0;
    const sumWithInitalPrice = itemsPrice.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initalPrice
    );

    setTotalSum(sumWithInitalPrice);

  }, [currentCart]);

const handleChange = (e) => {
  let previousValue = currentCart.find(item => item.id == e.target.id);
  let updatedCart = currentCart.filter(item => item.id != e.target.id);
  let newQuantity = e.target.value;
  setCurrentCart(
    sortAlphabetical([...updatedCart, {
      ...previousValue,
      quantity: newQuantity,
    }])
  );
}


  return(
    <div>
      <div className='cart-items'>
        {
          currentCart.map(item => {
            return (
              <div className='cart-list'>
                <CartItem item={item} />
                <div>
                  <label for={item.id}>Amount:</label>
                  <input type='number' id={item.id} value={item.quantity} onChange={handleChange}></input>
                </div>
              </div>
            );
          })
        }
      </div>
      <div className='total-cart-cost'>Total Cost of all items: ${totalSum}.</div>
    </div>
      );
}

export { Shop, Cart};
