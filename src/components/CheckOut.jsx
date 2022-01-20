import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import CheckoutBanner from "../images/CheckoutBanner.png";
import "./css/Checkout.css";
import CheckOutProduct from './CheckOutProduct';
import Subtotal from "./Subtotal";


function CheckOut() {
    const [{basket}] = useStateValue();
  return <div className='checkout'>
          <div className="checkout__left">
             <img 
        src={CheckoutBanner} 
        alt="Amazon ad"
         className="checkout__ad" 
         />
         {(basket?.length===0) ?(
           <div>
             <h2>Your Shopping basket is empty</h2>
             <p>TYou have no items in your basket. To buy one or "Add to basket" next to the item.</p>
           </div>
         ):(
           <div>
             <h2 className='checkout__title'>Your Shopping basket has {basket.length} item</h2>
             {basket?.map((item)=>
             (
                  <CheckOutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
             ))}
           </div>
         )
         }

          </div>

         {basket?.length>0 && ( 
            <div className="checkout__right">
                <Subtotal/>
            </div>
         )}
         </div>;
}

export default CheckOut;
