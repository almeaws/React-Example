import React, { useEffect, useState } from 'react'
import { db } from './FirebaseLocal';
import './Orders.css';
import { useStateValue } from './StateProvider';
import Order from './Order';
import {auth} from './FirebaseLocal';

function Orders() {
    const [{basket, user}, dispatch] = useStateValue(); 
    const loggedUser=auth.currentUser;   
    const[orders, setOrders] = useState([]);
    useEffect(()=>{
        if(loggedUser){
            db
            .collection('users')
            .doc(loggedUser?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot=>(
                setOrders(snapshot.docs.map(doc=>({
                    id: doc.id,
                    data: doc.data()
                })
                ))
            ))
        }else{
        setOrders([])
        }
    },[loggedUser])

  return (
    <div className='orders'>
        <h1>Your Orders</h1>

        <div className='orders__order'>
            {orders?.map(order=>(
                <Order order={order} />
                
            ))}
        </div>

    </div>
  )
}

export default Orders