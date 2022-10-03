import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import { Shop, Cart } from './Shop';
import Nav from './components/Nav';
import './style/style.css';

const RouteSwitch = () => {
  return (
    <div className="main-container">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteSwitch;
