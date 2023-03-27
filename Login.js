import './Login.css';
import {Link,useNavigate} from "react-router-dom";
import React,{useState} from 'react';
import {auth} from './FirebaseLocal';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            //console.log("auth at signin",auth);
            // dispatch({
            //     type:'LOGIN_SUCCESS',
            //     item:{
            //         user: email
            //     }
            // });
            navigate("/");
        }).catch(error=>alert(error.message));

    };

    const register = (e) =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth=> {
                //console.log("auth at createuser",auth);
                if(auth){
                    // dispatch({
                    //     type:'CREATE_SUCCESS',
                    //     item:{
                    //         user: email
                    //     }
                    // });
                    navigate("/");
                }
            })
            .catch(error=>alert(error.mesage));
    };

  return (
    <>
        <div className="login">
            <Link to="/">
                <img className="login__logo" src='./fh.png' />
            </Link>
       
        <div className="login__container">
              <h1>Sign In</h1>
              <form>
                <h5>Email</h5>
                <input 
                    type="text" 
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password"
                value={password}
                onChange = {(e) => setPassword(e.target.value)} />
                <button 
                className = "login__signinButton" 
                type="submit"
                onClick={signIn}
                >Sign In</button>
              </form>
              <p>By signing in you agree to conditions and terms of use. See our privacy notice, cookie notices and itnerest based ads notice</p>
              <button 
                className = "login__registerButton" 
                type="submit" 
                onClick={register}
                >Create your account</button>
        </div>
        </div>
    </>
  );
}

export default Login