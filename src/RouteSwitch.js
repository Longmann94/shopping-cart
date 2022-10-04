import { Routes, Route} from 'react-router-dom';
import App from './App';
import { Shop, Cart } from './Shop';
import Nav from './components/Nav';
import './style/style.css';
import Footer from './components/Footer';

const RouteSwitch = () => {
  return (
    <div className="main-container">

      <Nav />
      <Routes>
        <Route path='/shopping-cart' element={<App />} />
        <Route path='/shopping-cart/shop' element={<Shop />} />
        <Route path='/shopping-cart/cart' element={<Cart />} />
      </Routes>
      <Footer />

    </div>
  );
};

export default RouteSwitch;
