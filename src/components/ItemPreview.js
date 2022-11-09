import Button from '@mui/material/Button';

const ItemPreview = ({ selectedItem, handleClick }) => {

  return(
    <div className='item-preview-container'>
      <div className='item-preview-name'>{selectedItem.name}</div>
      <div className='item-preview-image'><img src='https://picsum.photos/450/300' /></div>
      <div className='item-preview-details'><b>Details:</b> <p>{selectedItem.details}</p></div>
      <div className='item-preview-price'><b>Price:</b> ${selectedItem.price}</div>
      <Button variant='contained' onClick={handleClick} id={selectedItem.id}>add to cart</Button>
    </div>
  );
}

export default ItemPreview;
