import React,{useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import {auth} from "./FirebaseLocal";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('promise');


function App() {
  const[{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      //console.log('user is',authUser);
      if(authUser){
        //user just logged in / user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else {
        //user logged out
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  }, [])
  
  return (

      <div className="app">
      
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path = "/" element = {[<><Header /><Home /></>]} />
          <Route path = "/checkout" element = {[  <><Header /><Checkout /></>]} />
          <Route path = "/payment" element = {
          <Elements stripe={promise}>
            [<Header /><Payment />]
            </Elements>
            }/>
           <Route path = "/orders" element = {[<><Header /> <Orders /></>]} />
        </Routes>
      </div>

  );  
}

export default App;
