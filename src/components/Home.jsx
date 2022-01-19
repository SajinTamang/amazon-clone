import React from 'react';
import HomeBanner from "../images/HomeBanner.jpg"
import "./css/Home.css";
function Home() {
  return (
  <div className="home">
     <img 
     className="home__image"
     src={HomeBanner} alt="Home page banner" />
     </div>
  )
}
export default Home;
