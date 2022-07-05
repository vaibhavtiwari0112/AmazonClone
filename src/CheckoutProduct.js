import React from 'react';
import './checkoutproduct.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './Stateprovider';

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();
   const removeFromBasket = () =>{
       //remove
       dispatch({
           type: 'REMOVE-FROM-BASKET',
           id:id,
       })
   }
return(
        <div className='checkoutproduct'>
<img className='checkoutproduct-image' src={image} />
        
        <div className='checkoutproduct-info'>
            <p className='checkoutproduct-title'>{title}</p>
<p className='checkoutproduct-price'>
    <small>Rs.</small>
    <strong>{price}</strong>
</p>
<div className="checkoutproduct-rating">
    {Array(rating)
    .fill()
    .map((_,i) => (
    <span className='star'><StarIcon /></span>
    ))
    }
    </div>
    <button onClick={removeFromBasket}>Remove from Basket</button>
       </div>
        </div>
        
    )
}

export default CheckoutProduct;