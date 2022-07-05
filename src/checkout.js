import React from 'react';
import "./checkout.css";
import Subtotal from './subtotal';
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';

function Checkout(){

    const [{basket,user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb22/AccPage/Attach/D38687335_WLA_Attach_banners_Acc_Mob_Hero_1242x450_2.jpg" className='checkout-ad' />            
            <div>
                <h3>Hello,{user?.email}</h3> 
            <h2 className="checkout-title">
                Your shopping Basket</h2>
{basket.map(item => (
    <CheckoutProduct
    id={item.id}
    title= {item.title}
    image= {item.image}
    price={item.price}
    rating={item.rating} 
    />
))}
    

            </div>
            </div>
           <div className="checkout-right">
               <Subtotal />
               </div> 
        </div>
    )
}

export default Checkout;