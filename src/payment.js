import React,{useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './payment.css';
import { useStateValue } from './Stateprovider';
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
const stripe = useStripe();
const elements = useElements();
const history = useHistory();

const [error, setError] = useState(null);
const [disabled, setDisable]=useState(true);
const [clientSecret, setClientSecret]=useState(true);
const [succeeded,setSucceeded]=useState(false);
const [processing,setProcessing] = useState("");

useEffect(() =>{
const getClientSecret = async () => {
const response = await axios({
    method: 'post',
    url:`/payment/create?total=Rs.{getBasketTotal(basket)*100}`
}); 
setClientSecret(response.data.clientSecret)
}

getClientSecret();
},[basket])

const handleSubmit = async (event)=> {
    //do all style
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent}) => {
//paymentIntent = payment confirmed
setSucceeded(true)
setError(null)
setProcessing(false)
history.replaceState('/orders')
    //const payload = await stripe
})
}

const handleChange = event=> {
setDisable(event.empty);
setError(event.error ? event.error.message : "ERROR");
    
}

    return(
        <div className='payment'>
            <div className='payment-container'>
<h1>
    Checkout(
        <Link to="/checkout">{basket?.length} items</Link>
    )
</h1>
<div className="payment-section">
    <div className="payment-title">
        <h3>Delivery Address</h3>
    </div>
    <div className="payment-address">
        <p>{user?.email}</p>
        <p>Krishnapuram , Kanpur</p>
        <p>Uttar Pradesh</p>
    </div>
</div>

<div className="payment-section">
    <div className="payment-title">
        <h3>Review items and Delivery</h3>
    </div>
    <div className="payment-items">
        {basket.map(item=> (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
        ))}
    </div>
</div>

<div className="payment-section">
    <div className="payment-title">
        <h3>Payment Method</h3>
    </div>
    <div className="payment-details">
        <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className='payment-pricecontainer'>
                <CurrencyFormat
                renderText = {(value) =>(
                    <>
                    <h3>Order Total:{value}</h3>
                    </>
                )}
                decimalScale={2}
                displayType={"text"}
                value={getBasketTotal(basket)}
                decimalScale ={2}
                thousandSeparator ={true}
                prefix={"Rs."}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
            </div>
            <div>
                {error && <div>{error}</div>}
            </div>
        </form>
    
    </div>
</div>
            </div>
        </div>
    )
}

export default Payment;