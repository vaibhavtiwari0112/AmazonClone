import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './Stateprovider';

function Product({id,title, image, price, rating}){

    const [state, dispatch] = useStateValue();

    const addtobasket=()=>{
//dispatch some action to data layer
dispatch({
    type: 'ADD-TO-BASKET',
    item: {
        title: title,
image: image,
price:price,
rating:rating,
id:id,
    }
});

    };
    return(
        <div 
        className='product'>
            <div className="product-info">
                <p>{title}</p>
                <p className='product-price'>
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, i)=>(
                        <span className="star"><StarIcon /></span>
                    ))}
                </div>
            </div>
            <img 
            src={image} />
            <button onClick={addtobasket}>Add to basket</button>
        </div>
    )
} 

export default Product;