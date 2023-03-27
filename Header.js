import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './FirebaseLocal';

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const loggedUser = auth.currentUser;
    const handleAuth=()=>{
        if(user){
            auth.signOut()
        };
    }
  return (
        <div className = 'header'>
        <Link to="/">
            <img className = "header__logo" src='fh.png' />
        </Link>
        <div 
        className = "header__search">
            <input className="header__searchInput" type="text">
            {/* <i className="bi bi-search"></i> */}
            </input>
            <SearchIcon className = "header__searchIcon"/>
        </div>
        <div className="header__nav">
            <Link to = {'/login'}>
                <div onClick ={handleAuth} 
                className = 'header__option'>  
                        <span className = 'header__optionLineOne'>
                            Hello {loggedUser? loggedUser.email: 'Guest'}</span>
                        <span className = 'header__optionLineTwo'>
                            {user ? 'Sign Out':'Sign In' }</span>    
                </div>
            </Link>
            <div className = 'header__option'>
                <span className = 'header__optionLineOne'>Returns</span>
                <Link to = {'/orders'}>
                    <span className = 'header__optionLineTwo'>Orders</span>
                    </Link>
            </div>
            <div className = 'header__option'>
            <span className = 'header__optionLineOne'>Your</span>
                <span className = 'header__optionLineTwo'>Prime</span>
            </div>
            <Link to = "/checkout">
            <div className = "header__optionBasket">
                <ShoppingBasket />
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header;