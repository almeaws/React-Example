import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBaseketTotal } from './reducer';
import axios from "./axios";
import { db } from './FirebaseLocal';
import { auth } from './FirebaseLocal';
function Payment() {
    const navigate = useNavigate();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState ("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [{basket,user},dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(true);
    const loggedUser=auth.currentUser;
    useEffect(()=>{
        const getClientSecret=async()=>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBaseketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    //console.log('the secret is >>>', clientSecret);
    
    const handleSubmit = async(event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload=await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            db
                .collection('users')
                    .doc(loggedUser?.uid)
                        .collection('orders')
                            .doc(paymentIntent.id)
                                .set({
                                    basket: basket,
                                    amount: paymentIntent.amount,
                                    created: paymentIntent.created
                                })
            setSucceeded(true);
            setError(true);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            navigate("/orders");

        }) 

    }
    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error? event.error.message:"");

    }

  return (
    <div className='Payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout"> 
                    {basket?.length} Items
                    </Link>
                    )
            </h1>

            <div className = 'payment__section'>
                    <div className = 'payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className = 'payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Ln</p>
                        <p>Los Angeles, CA</p>
                    </div>
            </div>
        </div>
        <div className = 'payment__section'>
                <div className = 'payment__title'>
                    <h3>Review Items and delivery</h3>
                        <div className='payment__items'>
                            {basket.map(
                                item=>
                                (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />    
                                )
                            )}
                        </div>
                </div>
        </div>
        <div className = 'payment__section'>
                <div className='payment__title'>
                    <h3> Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment__priceContainer'>
                        <CurrencyFormat
                            renderText={(value) =>(
                                    <h3> Order Total: {value}</h3>
                                    )}
                            decimalScale={2}
                            value={getBaseketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                    </form>
                </div>
        </div>

    </div>
  )
}

export default Payment