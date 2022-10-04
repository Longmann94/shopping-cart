import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import { Shop, Cart } from './Shop';
import Nav from './components/Nav';
import './style/style.css';
import Footer from './components/Footer';

const RouteSwitch = () => {
  return (
    <div className="main-container">
      <Router basename='https://longmann94.github.io/shopping-cart/'>
        <Nav />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default RouteSwitch;
