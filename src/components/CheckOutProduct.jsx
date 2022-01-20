import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import "./css/CheckoutProduct.css"
import { useStateValue } from '../Context/StateProvider';

function CheckOutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();

    // console.log(id,title,image,price,rating);
  const  removeFromBasket = () =>{
    //   remove item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
  }
  return <div className ="checkoutProduct">
      <img className="checkoutProduct__image"src={image} alt="" />

      <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
           <div className="checkoutProduct__rating">
          {
              Array(rating)
              .fill()
              .map((_) => (
                  <p><StarIcon className="ratingStar"/></p>
              ))
          }
      </div>
      <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
  </div>;
}

export default CheckOutProduct;
