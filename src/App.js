
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from './components/Nav';
import SearchResults from './components/SearchResults';
import ItemPreview from './components/ItemPreview';
import './style/style.css';
import Footer from './components/Footer';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

import uniqid from 'uniqid';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const App = () => {

  const navigate = useNavigate();

  const handleClickNavigate = (e) => {

    let id = e.currentTarget.id;


    if(id === 'home'){
       navigate('/', {replace: true});
    }
    if(id === 'shop'){
       navigate('/shop', {replace: true});
    }
    if(id === 'cart'){
       navigate('/cart', {replace: true});
    }
    if(id === 'searchResults'){
      navigate('/searchResults', {replace: true});
    }
  }

  const [itemsArr, setItemsArr] = useState([
    {
      key: uniqid(),
      id: 'i01',
      name: 'Pen',
      price: 1.5,
      quantity: 1,
      details: 'This is a pen, very simple, used to write stuff on paper',
      tags: ['pen', 'stationary', 'school']
    },
    {
      key: uniqid(),
      id: 'i02',
      name: 'Necklace',
      price: 300,
      quantity: 1,
      details: 'This is an expensive necklace, buy it and wear it to look pretty and elegant',
      tags: ['necklace', 'jewelery', 'expensive']
    },
    {
      key: uniqid(),
      id: 'i03',
      name: 'Pet food',
      price: 10,
      quantity: 1,
      details: 'This is food for your pets, not for human consumption',
      tags: ['pet', 'pet food', 'pets']
    },
    {
      key: uniqid(),
      id: 'i04',
      name: 'Book',
      price: 15,
      quantity: 1,
      details: 'This is a book, read it or use it for writing important notes.',
      tags: ['book', 'stationary', 'school']
    },
    {
      key: uniqid(),
      id: 'i05',
      name: 'Instant Noodles',
      price: 5,
      quantity: 1,
      details: `This is food for you or your pet, maybe don't feed this to your pet`,
      tags: ['instant noodles', 'noodles', 'food']
    },
    {
      key: uniqid(),
      id: 'i06',
      name: 'Apple',
      price: 5,
      quantity: 1,
      details: 'This is fruit for you, healthy snack to keep doctors away',
      tags: ['apple', 'fruit', 'food']
    },
    {
      key: uniqid(),
      id: 'i07',
      name: 'Orange',
      price: 5,
      quantity: 1,
      details: 'This is fruit for you, healthy snack to keep scurvy away',
      tags: ['orange', 'fruit', 'food']
    },
  ]);

  const [ promoArr, setPromoArr ] = useState([
    {
      key: uniqid(),
      promo: 'Buy 1 get another 1 for 100% of its price!'
    },
    {
      key: uniqid(),
      promo: 'Here is another equally funny promo.'
    },
    {
      key: uniqid(),
      promo: 'This is the last promo, I promise.'
    }
  ]);

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [ search, setSearch ] = useState('');
  const [ resultsArr, setResultsArr ] = useState([]);
  const [ selectedItem, setSelectedItem ] = useState('');


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

  const handleChangeSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  }

  const handleSearch = () => {

    let tempArr = [];

    itemsArr.forEach(item => {

      if(item.tags.find(tag => tag === search)){
        tempArr.push(item);
      }
    });
  setResultsArr([...tempArr]);
  navigate('/searchResults');

  }

  const handleClickItem =  (e) => {
     let selectedItemIndex = itemsArr.findIndex(item => item.id === e.target.id);
     setSelectedItem(itemsArr[selectedItemIndex]);
     navigate('/itemPreview');
  }

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

      <Nav handleClickNavigate={handleClickNavigate} handleChangeSearch={handleChangeSearch} handleSearch={handleSearch}/>
      <div className="cart-container">
        <ShoppingCartIcon />Cart have {cartQuantity} items <b> </b>
        <Link to='/cart'>Check Out</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home promoArr={promoArr} />} />
        <Route path='/shop' element={<Shop itemsArr={itemsArr} cartQuantity={cartQuantity} handleClick={handleClick} handleClickItem={handleClickItem} />} />
        <Route path='/cart' element={<Cart cart={sortAlphabetical(cart)} handleChange={handleChange}/>} />
        <Route path='/searchResults' element={<SearchResults resultsArr={resultsArr} cartQuantity={cartQuantity} handleClick={handleClick} />} />
        <Route path='/itemPreview' element={<ItemPreview selectedItem={selectedItem} handleClick={handleClick}/>} />
      </Routes>
      <Footer />

    </div>
  );
};

export default App;
