import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const SearchResults = ({ cartQuantity, resultsArr, handleClick, handleClickItem }) => {

  return (
    <div>
      <div className="store-container">
        {
          resultsArr.length === 0 && <div className='empty-search-message'> whatever your're looking for, we unfortunately do not have. :(</div>
        }
        {resultsArr.map(item => {
          return <ItemCard item={item} handleClick={handleClick} key={item.key} handleClickItem={handleClickItem} />
        })}
      </div>
    </div>
  );
}

export default SearchResults;
