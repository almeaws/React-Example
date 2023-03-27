import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '@mui/icons-material/Book';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import Dropdown from 'react-dropdown';
import { useStateValue } from './StateProvider';

function Product({id, title,image, price,rating}) {
  const [{basket},dispatch] = useStateValue();
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
  return (
    <div className="product">
        <div className="product__info">
            <h5>{title}</h5>
            <p className = "product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i)=>(<p>*</p>))}
            </div>
            </div>
            <img src={image}/>
            <button onClick={addToBasket} className="buy__button">
                    Add to Cart </button>
        

    </div>
  )
}

export default Product