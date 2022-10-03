import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import Cart from './Cart';

const RouteSwitch = () => {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<App />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
     </Routes>
    </Router>
  );
};

export default RouteSwitch;
