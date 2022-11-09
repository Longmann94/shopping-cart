import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

const Shop = ({ itemsArr, handleClick, handleClickItem }) => {

  return (
    <div>
      <div className="store-container">
        {itemsArr.map(item => {
          return <ItemCard item={item} handleClick={handleClick} key={item.key} handleClickItem={handleClickItem} />
        })}
      </div>
    </div>
  );
}



export default Shop;
