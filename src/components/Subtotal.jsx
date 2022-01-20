import React from 'react';
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Context/reducer';

function Subtotal() {
  const [{basket}, dispatch]= useStateValue();
  return <div className='subtotal'>
    <CurrencyFormat 
      renderText={(value)=>(
        <>
          <p>
              Subtotal ({basket.length} items):<strong>{`$ ${value}`}
              </strong>
            </p> 
            <small className="subtotal__gift">
              <input type="checkbox"/>
              <span>This order contains gift item</span>
            </small>
        </>
      
      )}

      decimalScale ={2}
      value={getBasketTotal(basket)}
      displayType ={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
      <button>Proceed the checkout</button>
  </div>;
}

export default Subtotal;
