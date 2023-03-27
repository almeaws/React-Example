import React from 'react';
import "./Home.css";
import Product from "./Product"
function Home() {
  return (
    <div className="home">
        <div className="home__container">
          <img className ="home__image" src="retail.jpg" alt=""/>
          <div className='home__row'>
            <Product id="4567" title = 'oil oil oil oil oil oil oil oil oil oil oil oil oil oil oil oil oil oil ' price={9.99} rating={3} image="1.jpg"/>
            <Product id="2345" title = 'berry berry berry berry berry berry berry berry berry berry berry berry berry berry ' price={6.99} rating={3} image="2.jpg"/>
          </div>
          <div className='home__row'>
            <Product id="3456" title = 'cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry cherry ' price={12.99} rating={3} image="3.jpg"/>
            <Product id="5678" title = 'honey honey honey honey honey honey honey honey honey honey honey honey ' price={25.99} rating={3} image="4.jpg"/>
            <Product id="6789" title = 'grains grains grains grains grains grains grains grains grains grains ' price={13.99} rating={3} image="5.jpg"/>
          </div>
          <div className='home__row'>
            <Product id="7890" title = 'bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread bread ' price={2.99} rating={3} image="6.jpg"/>
          </div>
        </div>
    </div>

    

  )
}

export default Home