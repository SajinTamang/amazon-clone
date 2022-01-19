import React from 'react';
import "./css/Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../Context/StateProvider";


function Header() {

  const [{basket}] = useStateValue();
  return <nav className='header'>
 
    <Link to="/">
      <img 
      src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo"
      alt="Amazon Logo"
      />
      </Link>      
     
        <div className="header__search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header__searchIcon"/>
         </div>         
      
            <div className="header__nav">
          
                <Link className="header__link" to="/login">
                <div className="header__option">
                     <span className="header__optionLineOne">Hello Sajin</span>
                    <span  className="header__optionLineTwo">Sign In</span>
                </div>
                </Link>
                 
                 <Link className="header__link" to="/login">
                <div className="header__option">
                     <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo"> & Orders</span>
                </div>
                </Link>
             
                  <Link className="header__link" to="/login">
                <div className="header__option">
                     <span  className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                </Link>
                 
                <Link to ="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        
                        <ShoppingBasketIcon/>
                        
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>


  </nav>;
}

export default Header;
