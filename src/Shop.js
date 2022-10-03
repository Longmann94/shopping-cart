import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ItemCard from './components/ItemCard';
import uniqid from 'uniqid';
import Nav from './components/Nav.js';

const Shop = () => {

  const [itemsArr, setItemsArr] = useState([
    {
      key: uniqid(),
      id: 'i01',
      name: 'pen',
      price: 1.5,
      details: 'this is a pen',
    },
    {
      key: uniqid(),
      id: 'i02',
      name: 'necklace',
      price: 300,
      details: 'this is an expensive necklace',
    },
    {
      key: uniqid(),
      id: 'i03',
      name: 'Pet food',
      price: 10,
      details: 'this is food for your pets',
    },
  ]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartBtn = document.querySelectorAll('.cart-button');
    const onClick = (e) => {
      const itemId = e.target.id;
      const item = itemsArr.find(item => item.id == itemId);

      setCart([
        ...cart, item
      ]);
    }
    console.log(cart);

    cartBtn.forEach(btn => btn.addEventListener('click', onClick));

    return () => {
      cartBtn.forEach(btn => btn.removeEventListener('click', onClick));
    }
  });


  return (
    <div>
      <div className="cart-container">
        cart have {cart.length} items
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
  // const itemsPrice = [];
  // const sum = props.forEach(item => {itemsPrice.push(item.price)});
  // const initalPrice = 0;
  // const sumWithInitalPrice = itemsPrice.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initalPrice
  // );
  console.log(state);

  return(
    <div>
      sum of all items are 0.
    </div>
  );
}

export { Shop, Cart};
