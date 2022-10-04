import {  HashRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import { Shop, Cart } from './Shop';
import Nav from './components/Nav';
import './style/style.css';
import Footer from './components/Footer';

const RouteSwitch = () => {
  return (
    <div className="main-container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default RouteSwitch;
