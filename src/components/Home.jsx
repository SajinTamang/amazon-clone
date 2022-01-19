import React from 'react';
import HomeBanner from "../images/HomeBanner.jpg"
import "./css/Home.css";
import Product from './Product';
import AcerMonitor from "../images/AcerMonitor.jpg"
import aidpods from "../images/airpods.jfif";
import SonyHeadphone from "../images/SonyHeadphone.jfif";
import Nintendo from "../images/Nintendo.jfif";
import Oculus from "../images/Oculus.jfif";
import Mouse from "../images/Mouse.jfif";

function Home() {
  return (
  <div className="home">
     <img 
     className="home__image"
     src={HomeBanner} alt="Home page banner" />
  <div className="home__row">
    <Product 
        id="12345"
        title="Acer monitor"
        price="600"
        rating={3}
        image={AcerMonitor}
    />
    <Product 
        id="12068"
        title="Nintendo Switch"
        price="449"
        rating={4}
        image={Nintendo}
    />
    </div>
      <div className="home__row">
    <Product 
        id="12368"
        title="Apple AirPods (2nd Gen) with Charging Case"
        price="250"
        rating={4}
        image={aidpods}
    />
    <Product 
        id="68972"
        title="Oculus Quest 2"
        price="300"
        rating={5}
        image={Oculus}
    />
     <Product 
        id="12345"
        title="Razer DeathAdder V2"
        price="600"
        rating={3}
        image={Mouse}
    />
    </div>

     <div className="home__row">
         <Product 
       id="12068"
        title="Sony WH1000XM3 Wireless Noise Cancelling Overhead Headphones, Black"
        price="400"
        rating={4}
        image={SonyHeadphone}
    />
     </div>
     {/* product id, title, price, rating, image */}
     </div>
  )
}
export default Home;
