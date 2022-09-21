import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/context";
import logo from "../netlogo.png";


export default function Login() {
  const {dispatch, isFetching} = useContext(AuthContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    try {
      //  const res = await axios.post(`http://localhost:5000/api/auth/login`, user)
       let data = {
        username: 'a',
        accessToken: 'token',
       }
        setTimeout(() => {
          dispatch({type: "LOGIN_SUCCESS", payload: data})
          history.push('/')
        }, 2000);
        
    } catch (error) {
      console.log(error)
      dispatch({type: "LOGIN_FAILURE"})
    }
   
  }
  
  return (
    <>
      <div className="header">
        <img src={logo} className="headerImg" />
        <Link to="/register"><button className="sign-in">Sign Up</button></Link> 
      </div>
      <div className="login">
        <div className="container">
          <h1>Sign In</h1>
          <form className="input-field" onSubmit={handleSubmit}>
            <input className="input-login" type="text" placeholder="Email address" ref={emailRef} />
            <input className="input-login" type="text" placeholder="Password" ref={passwordRef} />
            <button className="login-btn" disabled={isFetching} >Login</button>
          </form>
          <div className='login-desc'>

          <p>
            New to Netflix? <strong>Sign up Now.</strong>
          </p>
          <p>
           This page is protected by Google <strong>reCHAPTCHA </strong>to ensure you are not a bot <strong>Learn more</strong>
          </p>
         
          </div>
        </div>
      </div>
    </>
  );
}
