import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../netlogo.png";
import axios from "axios";

export default function Home() {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const history = useHistory()
console.log(success)
  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()
  const handleClick = () => {
    setEmail(emailRef.current.value)
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      email: email,
      password: passwordRef.current.value
    }
    console.log(user)
    try {
       const res = await axios.post(`http://localhost:5000/api/auth/register`, user)
        if(res){
          return setSuccess(true)
        }
    } catch (error) {
      setError(error.status)
      console.log(error)
    }
   
  }
  return (
    <>
      <div className="header">
        <img src={logo} className="headerImg" />
        <Link to="/login"><button className="sign-in">Sign In</button></Link> 
      </div>
      <div className="login">
        <div className="main">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          {!email ? (<div className="input-field">
            <input className="input" type="text" placeholder="Email address" ref={emailRef} />
            <button className="sign-btn" onClick={handleClick}> GET STARTED</button>
          </div>):
            <form className="input-field" onSubmit={handleSubmit}>
            <input className="input" type="text" placeholder="Username" ref={usernameRef} />
            <input className="input" type="text" placeholder="Username" value={email} hidden />
            <input className="input" type="text" placeholder="Password" ref={passwordRef} />
            {success && (
              <h3>{success}</h3>
            )}
            {error && (
              <h3>{error}</h3>
            )}
            <button className="sign-btn">START</button>
          </form>}
        <div>
          <p style={{ marginTop: "20px" }}>
            Ready to watch? Enter your email to create or access your account.
          </p>

        </div>
        </div>
      </div>
    </>
  );
}
