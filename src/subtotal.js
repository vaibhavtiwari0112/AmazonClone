import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './reducer';
import {useHistory} from 'react-router-dom';


function Subtotal() {
const history =useHistory();
    const [ {basket}, dispatch] = useStateValue();
    return(
        <div className='subtotal'>
<CurrencyFormat
renderText={(value)=>(
    <>
    <p>
        Subtotal ({basket.length} items): <strong>{value}</strong>
    </p>
    <small className='subtotal-gift'>
        <input type="checkbox" />
        This order contains gift
    </small>
    </>
)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"Rs."}
/>
<button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;