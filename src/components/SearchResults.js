import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const SearchResults = ({ cartQuantity, itemsArr, handleClick }) => {

  return (
    <div>
      <div className="cart-container">
        <ShoppingCartIcon />Cart have {cartQuantity} items
        <Link to='/cart'>Check Out</Link>
      </div>
      <div className="store-container">
        {itemsArr.map(item => {
          return <ItemCard item={item} handleClick={handleClick} key={item.key}/>
        })}
      </div>
    </div>
  );
}

export default SearchResults;
