
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from './components/Nav';
import './style/style.css';
import Footer from './components/Footer';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import uniqid from 'uniqid';

const App = () => {

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
    {
      key: uniqid(),
      id: 'i04',
      name: 'Book',
      price: 15,
      quantity: 1,
      details: 'this is a book',
    },
    {
      key: uniqid(),
      id: 'i05',
      name: 'Instant Noodles',
      price: 5,
      quantity: 1,
      details: 'this is food for your pets',
    },
    {
      key: uniqid(),
      id: 'i06',
      name: 'Apple',
      price: 5,
      quantity: 1,
      details: 'this is food for your pets',
    },
  ]);

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleClick = (e) => {
    const itemId = e.target.id;
    const item = itemsArr.find(item => item.id == itemId);
    const checkCart = cart.find(cartItem => cartItem.id == item.id);

    if(checkCart){
      let prevValue = cart.find(item => item.id == e.target.id);
      let updatedCart = cart.filter(item => item.id != e.target.id);
      setCart([
        ...updatedCart, {
          ...prevValue,
          quantity: prevValue.quantity + 1,
        }
      ]);
    }else{
      setCart([
        ...cart, item
      ]);
    }
  };

  const handleChange = (e) => {
    let previousValue = cart.find(item => item.id == e.target.id);
    let updatedCart = cart.filter(item => item.id != e.target.id);
    let newQuantity = e.target.value;

    setCart(
      sortAlphabetical([...updatedCart, {
        ...previousValue,
        quantity: Number(newQuantity),
      }]).filter(item => item.quantity != 0)
    );
  };

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
  };


  useEffect(() => {
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
  }, [cart]);


  return (
    <div className="main-container">

      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop itemsArr={itemsArr} cartQuantity={cartQuantity} handleClick={handleClick} />} />
        <Route path='/cart' element={<Cart cart={sortAlphabetical(cart)} handleChange={handleChange}/>} />
          </Routes>
      <Footer />

    </div>
  );
};

export default App;
