import React from 'react'
import "./CheckoutProduct.css"
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '@mui/icons-material/Book';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';

function CheckoutProduct({id, title,image, price,rating,hideButton}) {
  const [{basket},dispatch] = useStateValue();
  //console.log("product state",{basket});
  const addToBasket =() => {
    //dispatch item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id:id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }
    const removeFromBasket =() => {
      //dispatch item to data layer
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        item: {
          id:id,
          title: title,
          image: image,
          price: price,
          rating: rating
        }
      })
  }
  return (
    <FlipMove className='checkoutproduct__flipper'>
    <div className="checkoutproduct">
        <div 
          className="checkoutproduct__image">
            <img src={image}/> 
        </div>
        <div className="checkoutproduct__minipanel">
            <h5>{title}</h5>
            <p className = "checkout__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <p className="checkoutproduct__rating">
                {Array(rating).fill().map((_, i)=>(<p>*</p>))}
            </p>
            {!hideButton&&(
            <p className="checkoutproduct__buttons">
              <button onClick={addToBasket} className="add__button">
                      Add to Cart </button>
              <button onClick={removeFromBasket} className="remove__button">
                      Remove from Cart </button>
              </p>
              )}
        </div>
    </div>
    </FlipMove>
  )
}

export default CheckoutProduct