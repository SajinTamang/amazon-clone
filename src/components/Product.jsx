
import React from 'react';
import "./css/Product.css";
import StarIcon from '@material-ui/icons/Star';


function Product({id, title, price, rating, image}) {
  return <div className='product'>
      <div className="product__info">
             <p>{title}</p>
      <p className="product__price">
        <small>$</small><strong>{price}</strong> 
      </p>
      <div className="product__rating">
          {
              Array(rating)
              .fill()
              .map((_) => (
                  <p><StarIcon className="ratingStar"/></p>
              ))
          }
      </div>
      </div>
     
      <img src={image} alt="Acer Monitor"/>
      <button>Add to basket</button>
  </div>;
}

export default Product;
