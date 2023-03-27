import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className='checkout__left'>
            <img className ="checkout__ad" src ="ad.jpg" />
            <div>
                <h3>
                    Hello {user?user?.email:""},
                </h3>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(item =>
                    (
                        <CheckoutProduct id={item.id} 
                        title = {item.title} 
                        price={item.price} 
                        rating={item.rating} 
                        image={item.image}
                        />
                    )
                )}
                
                
            </div>
            <div>

            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout